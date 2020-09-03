import React from 'react';
import './list.css';
import logo from '../../logo.svg';
class List extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            mylist: [
                1,
                2,
                3,
                4,
                5
            ]
        }
        
        
    }
    render() {
        const myNumbers = this.state.mylist.map(item => <li>{item}</li>);
        return (
            <div className="test-class">
                <header className="App-header">
                   
                    <p>
                        You issas numbers:
                    </p>
                    <ul>
                        {myNumbers}
                    </ul>
                </header>
            </div>
        )
    }


   
}


export default List;
