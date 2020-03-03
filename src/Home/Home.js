import React, { Component } from 'react'

import Header from '../Header/Header';
import Subscribe from '../Subscribe/Subscribe';
import Highlighter from '../Highlighter/Highlighter';

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
        <p>
          <Highlighter sentence="Alexa, open voiceweave." keyword="Alexa" />
        </p>
        <img src={svg1} alt="voiceweave" />
        <p>
          <Highlighter sentence="What is it about?" keyword="What" />
        </p>
        <p>Voiceweave is about connecting content creators together. This is the fastest way of finding the perfect voice what you’re looking for.</p>
        {/* !ABOUT 1 */}

        <hr />
        {/* ABOUT 2 */}
        <img src={svg2} alt="voiceweave" />
        <p>
          <Highlighter sentence="Who is it for?" keyword="Who" />
        </p>
        <p>Content creators, like voiceover artists, can now reach to their audience a lot faster and for little money.</p>
        {/* !ABOUT 2 */}

        <Subscribe headline="Voiceweave comming soon" illustration={svg3} />

      </>
    )
  }
}

export default Home
