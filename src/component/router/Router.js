import React from 'react'
import Food from './Food';
import Animal from './Animal';
import Home from './Home';
import Header from './Header';
import NewRecord from './record/newRecord';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import '../../App.css';
class Router extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step1: false,
            step2: false,
            step3: false,
            record: {
                age: 0,
                needsAircon: true,
                fullName: 'Enter your name Fulname + lastname',
                parentControl: false,
                schoolName: '',
            },
            records:[]


        }
    }

    addRecords(formData){
        const newRecords = this.state.records;
        newRecords.push(formData);
        this.setState({
            ...this.state,
            records: newRecords
        })
    }
    render() {
        return (
            <div>


                <div >
                    <BrowserRouter>
                        <Header />
                        <div className="content">
                            <Switch>
                                <Route exact path="/">
                                    <Home records={this.state.records}/>
                                </Route>
                                <Route path="/new_record">
                                    <NewRecord record={this.state.record} addRecords={e => this.addRecords(e) }></NewRecord>
                                </Route>
                                <Route path="/animal">
                                    <Animal />
                                </Route>
                                <Route path="/food">
                                    <Food />
                                </Route>
                            </Switch>
                        </div>

                    </BrowserRouter>
                </div>

            </div>

        )
    }
}



export default Router;
