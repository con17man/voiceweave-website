import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Subscribe extends Component {
  render() {
    return (
      <div className="subscribe">
        { this.props.headline ? <h3 className="subscribe__headline">{this.props.headline}</h3> : '' }

        <input type="email" className="subscribe__email" placeholder="Enter your email address"></input>
        <button className="subscribe__cta">Join priority list</button>

        <p className="subscribe__info">
          By subscribing, you agree to receive emails from Voiceweave and accept
          our web <Link to="/terms-and-conditions" className="subscribe__info--link">Terms & Conditions</Link> and <Link to="/cookie-policy" className="subscribe__info--link">Privacy Policy</Link>.
        </p>

        { this.props.illustration ? <img src={this.props.illustration} className="subscribe__illustration" alt="voiceweave" /> : '' }
      </div>
    );
  }

}

Subscribe.propTypes = {
  headline: PropTypes.string,
  illustration: PropTypes.string
};

export default Subscribe;
