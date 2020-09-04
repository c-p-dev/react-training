import React from 'react';
import './sampleChild.css';
import logo from '../../logo.svg';
class SampleChild extends React.Component {

    constructor(props){
        super(props);
       
    }
    

    handleChange(e){
        console.log(`child event`, e);
        this.props.changeMe(e.target.value)
    }


    render() {
        return (
            <div className="sampleChild">
                Im a child
                <input type="text" value={this.props.text} onChange={(e)=> this.handleChange(e)} />
            </div>
        )
    }


}


export default SampleChild;
