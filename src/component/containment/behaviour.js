import React from 'react'

const child = [
    'polite', 'angry', 'hard working', 'lazy','rude'
]

class Behaviour extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const elements = this.props.elements.split(''); //[1,2,3]
        let allBehaviours = [] //[]
        elements.forEach(v => {
            allBehaviours.push(child[v])
        });//[polite , angry , hard working]
        allBehaviours = allBehaviours.join(' and ') // 'polite and angry and hard working'
        return (
            <div>
                {allBehaviours} Behaviours
                <br/>
            </div>
        )
    }
}
export default Behaviour;