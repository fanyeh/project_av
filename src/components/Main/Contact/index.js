import React, { Component } from 'react';
import TextField from './TextField';
import FlexBox from '@common/FlexBox';
import FlexColumn from '@common/FlexColumn';
import Intro from '@common/Intro';

class Contact extends Component {
  render() {
    return (
      <FlexColumn className="mb5 items-center">
        <Intro header="Hey Thr!" subtitle="we love to hear you." contact={true}>
          <iframe
            className="mt4"
            title="map"
            width="100%"
            height="500"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD8V5Hk2oRZZJeQlQA1W0sJXoQ8stqxYLM&q=Museum+of+New+Zealand+Te+Papa+Tongarewa"
            allowFullScreen
          />
        </Intro>
        <FlexBox className="flex-wrap justify-between mt6-ns mt5">
          <TextField placeholder="What's your name" />
          <TextField placeholder="What's your email" />
          <TextField placeholder="What's on your mind" />
        </FlexBox>
        <button className="bg-dark-red w-50 w-30-m w-20-l white ba0 pv3 fw7 f3-ns f5 tracked mb5">
          SEND EMAIL
        </button>
      </FlexColumn>
    );
  }
}

export default Contact;
