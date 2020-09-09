import React from 'react'


class SecondStep extends React.Component {


    constructor(props){
        super(props);
    }

    changeVal(e,key){
        console.log(`e`,e);
        let formData = this.props.formData;
        formData[key] = e;
        this.props.changeValue(formData);
    }

    render() {
        return (
            <div>
                <h3>School Classroon Info</h3>
                <form>
                    Needs Aircon: <input type="text" name="needsAircon"  value={this.props.formData.airCon} onChange={e => this.changeVal(e.target.value, 'airCon')} />
                    Needs Wifi :  <input type="text" name="needsWifi" value={this.props.formData.wifi} onChange={e => this.changeVal(e.target.value, 'wifi')} />
                </form>
            </div>

        )
    }

}

export default SecondStep