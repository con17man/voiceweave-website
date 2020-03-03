import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Highlighter.scss';

export class Highlighter extends Component {

  constructor (props) {
    super(props);
    this.state = { };
  }

  static propTypes = {
    sentence: PropTypes.string,
    keyword: PropTypes.string
  };


  highlight(sentence, keyword) {
    return { __html: sentence.replace(keyword, `<span class="highlighted">${keyword}</span>`) };
  }


  render() {
    const { sentence = '', keyword = '' } = this.props;

    return (
      <span dangerouslySetInnerHTML={ this.highlight(sentence, keyword) }></span>
    )
  }
}

export default Highlighter;
