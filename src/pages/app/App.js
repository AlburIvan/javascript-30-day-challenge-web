import React, { Component } from 'react';
import LeftArrow from '../../assets/icons/LeftArrow'
import RightArrow from '../../assets/icons/RightArrow'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       challengeDigit: 1
    }

    this.rotateLeft = this.rotateCarouselLeft.bind(this);
    this.rotateRight = this.rotateCarouselRight.bind(this);
  }

  componentDidMount() {
    this.arrowLeft = document.querySelector('div[data-key="arrow-left"]');
    this.arrowLeft.addEventListener('click', this.rotateLeft);
    this.arrowRight = document.querySelector('div[data-key="arrow-right"]');
    this.arrowRight.addEventListener('click', this.rotateRight);

  }

  lpad() {
    const numeralValue = this.state.challengeDigit.toString();

    if(numeralValue.length === 1) {

      var str = numeralValue;
      while (str.length < 2)
          str = '0' + str; 
      return str;
    } else {
      return this.state.challengeDigit;
    }
  }



  rotateCarouselLeft = () => {

    if(this.state.challengeDigit == 1 ) {
      document.querySelector('.button-left').style.visibility = 'hidden';
      return;
    }


    const activeBox       = document.querySelector('.box-active');
    const nextBoxRight    = document.querySelector('.box-next-right');
    const queuedBoxRight  = document.querySelector('.box-queued-right');

    const nextBoxLeft     = document.querySelector('.box-next-left');
    const queuedBoxLeft   = document.querySelector('.box-queued-left');
   

    activeBox.classList.remove('box-active');
    activeBox.classList.add('box-next-right');

    nextBoxLeft.classList.remove('box-next-left');
    nextBoxLeft.classList.add('box-active');

    queuedBoxLeft.classList.remove('box-queued-left');
    queuedBoxLeft.classList.add('box-next-left');

    const newBox = document.createElement('div');
    newBox.classList.add('challenge__viewer_carousel_box');
    newBox.classList.add('box-queued-left');
    newBox.classList.add('animated');
    newBox.classList.add('fadeIn');
    document.querySelector('.challenge__viewer_carousel').appendChild(newBox);

    nextBoxRight.classList.remove('box-next-right');
    nextBoxRight.classList.add('box-queued-right');

    queuedBoxRight.classList.remove('box-queued-right');
    queuedBoxRight.classList.add('animated');
    queuedBoxRight.classList.add('fadeOut');
    queuedBoxRight.classList.add('box-hidden');

    this.setState({
      challengeDigit: Number(this.state.challengeDigit) - 1
    })
  }
  

  rotateCarouselRight = () => {

    if( document.querySelector('.button-left').style.visibility === 'hidden' && this.state.challengeDigit > 0 ) {
      document.querySelector('.button-left').style.visibility = 'visible';
    }


    const activeBox       = document.querySelector('.box-active');
    const nextBoxLeft     = document.querySelector('.box-next-left');
    const queuedBoxLeft   = document.querySelector('.box-queued-left');

    const nextBoxRight     = document.querySelector('.box-next-right');
    const queuedBoxRight   = document.querySelector('.box-queued-right');
   

    activeBox.classList.remove('box-active');
    activeBox.classList.add('box-next-left');

    nextBoxRight.classList.remove('box-next-right');
    nextBoxRight.classList.add('box-active');

    queuedBoxRight.classList.remove('box-queued-right');
    queuedBoxRight.classList.add('box-next-right');

    // create new element here
    const newBox = document.createElement('div');
    newBox.classList.add('challenge__viewer_carousel_box');
    newBox.classList.add('box-queued-right');
    newBox.classList.add('animated');
    newBox.classList.add('fadeIn');
    document.querySelector('.challenge__viewer_carousel').appendChild(newBox);


    nextBoxLeft.classList.remove('box-next-left');
    nextBoxLeft.classList.add('box-queued-left');

    queuedBoxLeft.classList.remove('box-queued-left');
    queuedBoxLeft.classList.add('animated');
    queuedBoxLeft.classList.add('fadeOut');
    queuedBoxLeft.classList.add('box-hidden');

    this.setState({
      challengeDigit: Number(this.state.challengeDigit) + 1
    })
  }

  render() {
    return (
      <div className="container">
        <span className="challenge-digit not-selectable animated fadeIn">{this.lpad()}</span>
        <div className="challenge__viewer">
          <h1 className="challenge__viewer_title not-selectable">Type Ahead</h1>
          <div className="challenge__viewer_carousel">
            <div className="challenge__viewer_carousel_box box-active"></div>
            <div className="challenge__viewer_carousel_box box-next-left"></div>
            <div className="challenge__viewer_carousel_box box-next-right"></div>
            <div className="challenge__viewer_carousel_box box-queued-left"></div>
            <div className="challenge__viewer_carousel_box box-queued-right"></div>
          </div>
          <div data-key="arrow-left" className="challenge__viewer_carousel_button button-left not-selectable">
            <LeftArrow />
          </div>
          <div data-key="arrow-right" className="challenge__viewer_carousel_button button-right not-selectable">
            <RightArrow  />
          </div>
          <div className="challenge__viewer_description">
            <h3 className="not-selectable">Description</h3>
            <p>
              Ea maxime accusamus dicta assumenda delectus iusto. A tempore et delectus nemo dolorem quod. 
              Enim repudiandae dolor et optio corrupti. Omnis nisi ut molestiae explicabo eveniet maxime. 
              Eum laudantium sunt cum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
