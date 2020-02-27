import React, { Component } from 'react'

import Header from '../Header/Header';
import Subscribe from '../Subscribe/Subscribe';

import svg1 from '../assets/img/illustration_1.svg';
import svg2 from '../assets/img/illustration_2.svg';
import svg3 from '../assets/img/illustration_3.svg';

export class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Subscribe />

        {/* ABOUT 1 */}
        <p><span>Alexa,</span> open <span>voiceweave</span>.</p>
        <img src={svg1} alt="voiceweave" />
        <p><span>What</span> is it about?</p>
        <p>Voiceweave is about connecting content creators together. This is the fastest way of finding the perfect voice what you’re looking for.</p>
        {/* !ABOUT 1 */}

        <hr />
        {/* ABOUT 2 */}
        <img src={svg2} alt="voiceweave" />
        <p><span>Who</span> is it for?</p>
        <p>Content creators, like voiceover artists, can now reach to their audience a lot faster and for little money.</p>
        {/* !ABOUT 2 */}

        <Subscribe headline="Voiceweave comming soon" illustration={svg3} />

      </>
    )
  }
}

export default Home
