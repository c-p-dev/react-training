import React from 'react'


class NativeAjax extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            items: []
        }
    }
    getAllCountries = () =>{
        const requestOptions = {
            method: 'GET'
            
        };
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer my-token',
        //         'My-Custom-Header': 'foobar'
        //     },
        //     body: JSON.stringify({ title: 'React POST Request Example' })
        // };
        fetch("https://restcountries.eu/rest/v2/all",requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    componentWillMount = async () => {
        await this.getAllCountries();
    }
    render() {
        const allCountries = this.state.items.map(entry =>
            <li>{entry ? entry.name : 'No Data Available'}</li>
          )
        return (
            <ul>
                {allCountries}
            </ul>
        )
    }
}
export default NativeAjax;