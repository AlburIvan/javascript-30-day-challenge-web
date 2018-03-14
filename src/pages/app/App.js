import React, { Component } from 'react';
import LeftArrow from '../../assets/icons/LeftArrow'
import RightArrow from '../../assets/icons/RightArrow'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       challengeDigit: 6
    }
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

  render() {
    return (
      <div className="container">
        <span className="challenge-digit not-selectable">{this.lpad()}</span>
        <div className="challenge__viewer">
          <h1 className="challenge__viewer_title not-selectable">Type Ahead</h1>
          <div className="challenge__viewer_carousel">
            <div className="challenge__viewer_carousel_boxes">
              <div className="challenge__viewer_carousel_box box-active"></div>
              <div className="challenge__viewer_carousel_box box-next-left"></div>
              <div className="challenge__viewer_carousel_box box-next-right"></div>
              <div className="challenge__viewer_carousel_box box-queued-left"></div>
              <div className="challenge__viewer_carousel_box box-queued-right"></div>
            </div>
            <span className="challenge__viewer_carousel_left not-selectable"><LeftArrow /></span>
            <span className="challenge__viewer_carousel_right not-selectable"><RightArrow /></span>
          </div>
          <div className="challenge__viewer_description">
            <h3 className="not-selectable">Description</h3>
            <p>
              Ea maxime accusamus dicta assumenda delectus iusto. A tempore et delectus nemo dolorem quod. 
              Enim repudiandae dolor et optio corrupti. Omnis nisi ut molestiae explicabo eveniet maxime. 
              Eum laudantium sunt eum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
