import React from 'react'
import './record.css';
import Stepper from './stepper';
import {BrowserRouter, Route, Switch, useHistory, useLocation, Redirect} from 'react-router-dom'
import FirstStep from './firstStep';
import SecondStep from './secondStep';
import ThirdStep from './thirdStep';



class NewRecord extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            steps: [
                {
                    path:'/new_record/',
                    valid:false,
                    order:1,
                    active: true,
                },
                {
                    path:'/new_record/second-step',
                    valid: false,
                    order:2,
                    active:false,
                },
                {
                    path:'/new_record/thrid-step',
                    valid: false,
                    order:3,
                    active:false
                }
            ],
            records: [],
            form:{
                schoolName:'',
                address:'',
                noOfStudents:'',
                airCon:'',
                wifi:'',
            }
        }
    }
    
    moveStepForward(){

        let steps = this.state.steps;
        const activeStep = steps.find((item)=> item.active);
        const nextStep = steps.find((item)=> item.order === activeStep.order + 1 )
        if(!nextStep){
            this.addRecord();
            return;
        }
        const newStep = this.changeStep(nextStep);

        this.setState({
            ...this.state,
            steps:newStep
        })
    }


    moveStepBackward(){
        let steps = this.state.steps;
        const activeStep = steps.find((item)=> item.active);
        const prevStep = steps.find((item)=> item.order === activeStep.order - 1 )
        if(!prevStep){
            return;
        }
        const newStep = this.changeStep(prevStep);

        this.setState({
            ...this.state,
            steps:newStep
        })
    }

    changeStep(targetStep){
        let steps = this.state.steps;
        steps.forEach(item => {
           
            if(targetStep.order > 3){
                return;
            }
            
            if(item.order === targetStep.order ){
                item.active = true;
            }else{
                item.active = false;
            }
        });

        return steps;
    }

    getActivePath(){
        // console.log(`this.state`, this.state)
        let activePath = this.state.steps.find(item => item.active);
    
        // console.log(`activePath`, activePath);
        return activePath;
    }

    changeValue(e){
        let form = Object.assign(e, this.state.form)
        console.log(`form`, form)
        this.setState({
            ...this.state,
            form: form
            })
    }

    addRecord(){
        const form = {
            schoolName:'',
            address:'',
            noOfStudents:'',
            airCon:'',
            wifi:'',
        };

        this.props.addRecords(this.state.formData);


        
    }

    render() {
        // let history = useHistory();
        const activePath = this.getActivePath() ? <Redirect to={this.getActivePath().path} /> : null;
        return (
            <div>
                 <Route component={({ match }) =>
                    <div>
                        <Route path='/new_record/'  exact>
                           <FirstStep formData={this.state.form.schoolName}  changeValue={e => this.changeValue(e)}/>
                        </Route>
                        <Route path='/new_record/second-step'>
                            <SecondStep formData={this.state.form} changeValue={e => this.changeValue(e)}/>
                        </Route>
                        <Route path='/new_record/thrid-step' >
                            <ThirdStep formData={this.state.form} changeValue={e => this.changeValue(e)}/>
                        </Route>
                        {activePath}
                    </div>

                }/>
                {this.props.children}
                <div className="stepper">
                    <Stepper steps={this.state.steps} moveStepForward={()=> this.moveStepForward()} moveStepBackward={()=> this.moveStepBackward()} ></Stepper>
                </div>
            </div>

        )
    }
}



export default NewRecord;
