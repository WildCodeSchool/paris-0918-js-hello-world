import React, { Component } from "react"
import '../css/Header.css'
const Header = () => (
    <div className = "header">
        <img className ="logo" src={require('../images/Logo.svg')}/>
        <img className ="icon-contact" src={require('../images/Envelope.svg')} />
    </div>
);
  
  export default Header;
// class Header extends Component {
//     render() {
//         return (
//             <div>
//                 <h1> HELLO WORLD</h1>
//             </div>
//         );
//     }
// }