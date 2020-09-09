import React from 'react'
import Behaviour from './behaviour'
import Child from './child'

class Mother extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            countries: []
        }
    }

    componentDidMount(){
        this.getCountries();
    }
    getCountries() {
        //https://restcountries.eu/#api-endpoints-calling-code
        //https://restcountries.eu/#api-endpoints-all
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(
                (res) => {
                    console.log(`result`, res)
                    this.setState({
                        isLoaded: true,
                        countries: res
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
        const countries  = this.state.countries.map(item => 
            <Child country={item.name} region={item.region.name} />
        )
        return (
            <div>
                
                {countries}
               
            </div>
        )
    }
}
export default Mother;