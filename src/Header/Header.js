import React, { Component } from 'react';

import logo from '../assets/img/voiceweave_logo.svg';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="header__logo" alt="Voiceweave" />

        <p className="header__title">Get connected to the <span className="text--warning">right</span> people.</p>
        <p className="header__subtitle">Let millions of people hear your voice.</p>
      </div>
    )
  }
}

export default Header;
