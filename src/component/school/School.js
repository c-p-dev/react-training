import React from 'react';
import './School.css';
import logo from '../../logo.svg';
class School extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            noOfClasses: 0,
            noOfStudents: 0,
            hasAircon:false,
            username: null,
            password: null,
        }
    }
    componentDidMount(){
        const record = JSON.parse(localStorage.getItem('state'));
        console.log(`record`, record);
        // let asd = JSON.parse(record);
        // console.log(`asd`, asd);
        if(record){
            this.setState({
                ...record
            })

            console.log(`new state`, this.state)
        }
    }



    handleSubmit(event){
        event.preventDefault();
        console.log(`event`, event);
        console.log(`state`, this.state);
        let username = this.generateRandomChar();
        let password = this.generateRandomChar();
        this.setState({
            ...this.state,
            username: username,
            password: password,
        })
        localStorage.setItem('state', JSON.stringify(this.state));
    }

    handleChangeEvent(event, value){
        this.setState({
            ...this.state,
            ...value,

        })
    }

    generateRandomChar(){
        return Math.random().toString(36).substring(7);
    }

    render() {
        return (
            <div className="test-class">
                <div className="form">
                    <h1>School Information</h1>
                    <form onSubmit={(e)=>this.handleSubmit(e)}>
                        <p>Number of Classes: <input type="number" name="noOfClasses" value={this.state.noOfClasses} onChange={(e)=>this.handleChangeEvent(e, {noOfClasses: e.target.value})} /></p>
                        <p>Number of Students: <input type="number" name="noOfStudents" value={this.state.noOfStudents} onChange={(e)=>this.handleChangeEvent(e,{noOfStudents: e.target.value} )}/></p>
                        <p>Has aircon :
                            <span><input type="radio" name="aircon" value="true" checked={this.state.hasAircon == "true"}  onChange={(e)=>this.handleChangeEvent(e, {hasAircon: e.target.value})} />Yes</span>
                            <span><input type="radio" name="aircon" value="false" checked={this.state.hasAircon == "false"} onChange={(e)=>this.handleChangeEvent(e, {hasAircon: e.target.value})} />No</span>
                        </p>
                    
                        <button type="submit">Submit</button>
                       

                    </form>
                </div>


            </div>
        )
    }


}


export default School;
