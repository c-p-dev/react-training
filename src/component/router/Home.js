import React from 'react'
import './Home.css';
import Header from './Header';

class Home extends React.Component {

    constructor(props){
        super(props);
        
    }
   

    render(){

    const list = this.props.records.map(item => <li>{item}</li>);
        return (
            <div>
                <h1>Home page</h1>
                <br/>
                School List: <br/>
                <ul>
                    {list}
                </ul>

                    
            
            </div>
        )
    }

}

export default Home
