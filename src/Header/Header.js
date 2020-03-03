import React, { Component } from 'react';

import Highlighter from '../Highlighter/Highlighter';

import logo from '../assets/img/voiceweave_logo.svg';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="header__logo" alt="Voiceweave" />

        <p className="header__title">
          <Highlighter sentence="Get connected to the right people." keyword="right" />
        </p>
        <p className="header__subtitle">Let millions of people hear your voice.</p>
      </div>
    )
  }
}

export default Header;
