import React from 'react'
import './record.css';
class Stepper extends React.Component {
    constructor(props){
        super(props)
    }
    
    stepHandler(e, step) {
        e.preventDefault();
        // alert(step);
        if(step ==='Next Step'){
            this.props.moveStepForward()
        }
        if(step === 'Previous Step'){
            this.props.moveStepBackward();
        }
        
    }



    render() {
        
        const activeStep = this.props.steps.find(item=> item.active === true);
        console.log(`activeStep`, activeStep)
        const previousBtn =  true ? <button onClick={(e)=> this.stepHandler(e, 'Previous Step')}> Previos Step </button> : null;
        return (
            <div className="">
                {previousBtn}
                <button onClick={(e)=> this.stepHandler(e, 'Next Step')}>
                    Next Step
                </button>
            </div>

        )
    }
}



export default Stepper;
