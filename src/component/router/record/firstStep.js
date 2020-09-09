import React from 'react'



class FirstStep extends React.Component {


    constructor(props){
        super(props);
    }

    changeVal(e){
        // this.props.changeValue({schoolName: e});
        console.log(`e`, e);
    }

    render() {
        return (
            <div>
                <h3>Enter School Name</h3>
                <form>
                    School Name: <input type="text" name="schoolName" value={this.props.formData} onChange={e => this.changeVal(e.target.value)} />
                </form>
            </div>

        )
    }

}

export default FirstStep