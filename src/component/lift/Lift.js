import React from 'react';
import './Lift.css';
import logo from '../../logo.svg';
import SampleChild from '../sampleChild/sampleChild';
class Lift extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text: 'original'
        }
    }
    
    changeMe(e){
        console.log(`event`, e)
        this.setState({
            text:e
        })
    }

    render() {
        return (
            <div className="test-class">
               <span> Im a parent {this.state.text}</span>
               
                <SampleChild  changeMe={(e)=> this.changeMe(e)} text={this.state.text} />
            </div>
        )
    }


}


export default Lift;
