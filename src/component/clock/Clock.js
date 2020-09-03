import React from 'react';
import './clock.css';
import logo from '../../logo.svg';

class Clock extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            number: Math.floor((Math.random() * 4000) + 6000),
            clock: new Date()
        }
    }

    render(){
        return(
            <div className="test-class">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Issa clock  {this.state.number}</p>
                <p>    
                    Issa number {this.state.clock.toLocaleTimeString()}
                </p>
            </header>
        </div>
        )
    }

    componentDidMount(){
        console.log(`Component did mount`);
        setInterval(()=> this.tickClock(), 1000);
    }

    tickClock(){
        
        this.setState({
            number: Math.floor((Math.random() * 4000) + 6000),
            clock: new Date(),
        })
    }   

    
}


export default Clock;