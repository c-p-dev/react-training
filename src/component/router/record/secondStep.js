import React from 'react'


class SecondStep extends React.Component {

    constructor(props){
        super(props);
    }

    changeVal(e, key){
        console.log(`e`,e);
        let formData = this.props.formData;
        formData[key] = e;
        this.props.changeValue(formData);
    }


    render() {
        return (
            <div>
                <h3>School Info</h3>
                <form>
                    Addresss: <input type="text" name="addresss" value={this.props.formData.address}  onChange={ e => this.changeVal(e.target.value, 'address')} /> <br/>
                    Number of Student :  <input type="text" name="noOfStudent" value={this.props.formData.noOfStudents} onChange={e => this.changeVal(e.target.value, 'noOfStudents')}/>
                </form>
            </div>

        )
    }

}

export default SecondStep