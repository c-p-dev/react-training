import React from 'react';
import './anagram.css';
import logo from '../../logo.svg';
class Anagram extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            word1: 'listen',
            word2: 'silent',
            result: false,
        }

    }


    validate = () => {
        alert(`cheking`)

        if (this.state.word1.split('').sort().join('') === this.state.word2.split('').sort().join('')) {
            this.setState({
                ...this.state,
                result: true,
            })
        } else {
            this.setState({
                ...this.state,
                result: false
            })
        }
    }


    inputChangedHandler = (event, value) => {
        this.setState({
            ...this.state,
            ...value,

        })
    }


    render() {

        return (
            <div className="test-class">

                <header className="App-header">

                    <div>
                        Word one : <input type="text" name="word1" value={this.state.word1} onChange={(event) => this.inputChangedHandler(event, { word1: event.target.value })} />
                    </div>
                    <br />
                    <div>
                        Word two : <input type="text" name="word2" value={this.state.word2} onChange={(event) => this.inputChangedHandler(event, { word2: event.target.value })} />
                    </div>
                    <br />
                    <button onClick={this.validate}>
                        submit
                    </button>
                    <p>
                        {this.state.result ? `Anagram` : `Not an Anagram`}


                    </p>

                </header>
            </div>
        )
    }



}


export default Anagram;
