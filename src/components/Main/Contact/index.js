import React, { Component } from 'react';
import FlexBox from '@common/FlexBox';
import Intro from '@common/Intro';
import TextField from './TextField';
class Contact extends Component {
  render() {
    return (
      <div className="w-100 tc">
        <FlexBox className="justify-between">
          <Intro header="Hey Thr!" subtitle="we love to hear you.">
            <div className="contact">
              <i class="fas fa-phone mr5 f4"> +8197654321</i>
              <i class="fas fa-envelope f4"> contact@domain.com</i>
            </div>
          </Intro>
          <iframe
            title="map"
            width="600"
            height="500"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD8V5Hk2oRZZJeQlQA1W0sJXoQ8stqxYLM&q=Museum+of+New+Zealand+Te+Papa+Tongarewa"
            allowFullScreen
          />
        </FlexBox>
        <FlexBox className="flex-wrap justify-between mt6">
          <TextField placeholder="What's your name" />
          <TextField placeholder="What's your email" />
          <TextField placeholder="What's on your mind" />
        </FlexBox>
        <button className="bg-dark-red white ba0 pa3 fw7 f3 tracked">SEND EMAIL</button>
      </div>
    );
  }
}

export default Contact;
