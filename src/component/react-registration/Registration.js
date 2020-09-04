import React from 'react'
import Finder from './finderForm'
import Result from './result'

const schools = [
    {
        name: '',
        maxAge: 7
    },
    {
        name: '',
        maxAge: 9
    },
    {
        name: '',
        maxAge: 15
    },
    {
        name: '',
        maxAge: 18
    },

]
class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 0,
            needsAircon: true,
            fullName: 'Enter your name Fulname + lastname',
            parentControl: false
        }
    }
    handleFullNameChange = (e) => {
        this.setState({ fullName: e })

    }
    handleAgeChange = (e) => {
        this.setState({ age: e })


    }
    handleAirconChange = (e) => {
        this.setState({ aircon: e })

    }
    filterSchools = () => {
        return schools.filter(e => {
            return this.state.age < e.maxAge
        })
    }
    
    render() {
        return (
            <div>
                <Finder
                    onFullnameChange={this.handleFullNameChange}
                    onAgeChange={this.handleAgeChange}
                    onAirconChange={this.handleAirconChange}
                    info={this.state} />
                <Result schools={this.filterSchools()} />
            </div>
        )
    }
}
export default Registration;