import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class TermsAndConds extends Component {
  render() {
    return (
      <div>
        <h1>THIS IS TERMS & CONDITIONS</h1>
        <button>
          <Link to="/">Go Home</Link>
        </button>
      </div>
    )
  }
}

export default TermsAndConds;
