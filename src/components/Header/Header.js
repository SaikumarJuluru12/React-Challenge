import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div id="header">
        <div className="logoContainer">
          <img className="headerLogo" src={require('../../assets/logo-endless.svg')} alt="headerLogo" />
        </div>
      </div>
    );
  }
}

export default Header;