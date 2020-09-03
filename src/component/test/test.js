import React from 'react';
import './test.css';
import logo from '../../logo.svg';
class Test extends React.Component {

    render() {
        return (
            <div className="test-class">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        You issa {this.getMyAgeText()}
                    </p>
                </header>
            </div>
        )
    }


    getMyAgeText() {

        let result = 'not a human';
        const age = parseInt(this.props.age);
        if (age < 1)
            return 'Baby';

        else if (age >= 1 && age <= 3)
            return 'Toddler';

        else if (age > 3 && age <= 5)
            return 'Preschool';

        else if (age > 5 && age <= 12)
            return 'GradeSchooler';

        else if (age > 12 && age <= 18)
            return 'Teen';

        else if (age > 18 && age <= 21)
            return 'Young Adult';



    }
}


export default Test;
