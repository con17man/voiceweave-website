import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CookiePolicy extends Component {
  render() {
    return (
      <>
        <h1>THIS IS COOKIE POLICY</h1>
        <button>
          <Link to="/">Go Home</Link>
        </button>
      </>
    )
  }
}

export default CookiePolicy
