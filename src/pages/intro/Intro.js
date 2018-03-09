import React, { Component } from 'react'
import CountUp from 'react-countup';
import './Intro.css'
import 'animate.css'

export class Intro extends Component {

  constructor(props) {
    super(props)
  
    this.onCountingComplete = this.handleCountingComplete.bind(this);
  }

  handleCountingComplete() {
    const textLeft = document.querySelector('#text-left');
    textLeft.classList.toggle('hidden')
    textLeft.classList.add('fadeInRight');

    const textRight = document.querySelector('#text-right');
    textRight.classList.toggle('hidden');
    textRight.classList.add('fadeInLeft');

    const subTitle = document.querySelector('.sub-title');
    subTitle.classList.toggle('hidden');
    subTitle.classList.add('fadeInUp');


    const footer = document.querySelector('.footer');
    footer.classList.toggle('hidden');
    footer.classList.add('fadeInUp');

    setTimeout(() => {
      console.log('vamo pal otro lao')
    },3000)
  }


  render() {
    return (
      <div className="container">
        <div className="title">
        <h1>
          <span id="text-left" className="hidden animated">Javascript </span>
          <CountUp
            className="animated fadeIn countup"
            start={0}
            end={30}
            duration={4.5}
            useEasing={true}
            onComplete={this.onCountingComplete}
          />
          <span id="text-right" className="hidden animated"> Day Challenge</span>
        </h1>
        </div>
        <div className="hidden sub-title">
          <span>Course by Wes Bos</span>
        </div>
        <div className="hidden footer">
          <span>Made by @alburivan</span>
        </div>
      </div>
    )
  }
}

export default Intro
