import React from 'react'


class Child extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showMore: false,
        }
    }
    clickHandler(){
        alert(`click`);
        this.setState({showMore: !this.state.showMore})
    }

    render(){
        let info = this.state.showMore ? <div className="moreInfo"> {this.props.region} </div> : null;
        return (
            <div>
                Country: {this.props.country} <span onClick={(e)=>this.clickHandler()}> show More</span>
                <br/>   
                {info}

                
                
            </div>
        )
    }
}
export default Child;