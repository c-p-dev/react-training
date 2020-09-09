import React from 'react'
import './Header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Header extends React.Component{
    render(){
        return (
            <div>
                <ul>
                    <li> <Link to="/" > Home</Link></li>
                    <li> <Link to="/new_record"  >New Record</Link></li>
                    {/* <li> <Link to="/food"  >Foods</Link></li> */}
                    {/* <li> <Link to="/animal" >Animal</Link></li> */}
                </ul>
            </div>
         
        )
    }
    
}

export default Header
