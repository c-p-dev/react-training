import React from 'react';
import './Ajax.css';
import logo from '../../logo.svg';
class Ajax extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contries: [],
            isLoaded: true,
            items: []
        }

    }
    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(
                (res) => {
                    console.log(`result`, res)
                    this.setState({
                        isLoaded: true,
                        items: res
                    });
                },

                (error) => {
                    this.setState({
                        ...this.state,
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    getCountryByApi() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(
                (res) => {
                    console.log(`result`, res)
                    this.setState({
                        isLoaded: true,
                        items: res
                    });
                },

                (error) => {
                    this.setState({
                        ...this.state,
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const allCountries = this.state.items.map(item =>
            <li>{item.name}</li>
        )

        return (
            <div className="test-class">
                <ul>
                    {allCountries}
                </ul>
            </div>
        )
    }






}


export default Ajax;
