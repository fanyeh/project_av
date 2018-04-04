import React, { Component } from 'react';
import FlexBox from '@common/FlexBox';
import Intro from '@common/Intro';
import AboutCard from './AboutCard';
import AboutDescription from './AboutDescription';

class About extends Component {
  render() {
    return (
      <div className="flex flex-column">
        <FlexBox>
          <Intro
            header="We Do"
            subtitle="What we love to do."
            description="Over 40,000 customers use our themes to power their websites and we love them."
          />
          <AboutDescription />
        </FlexBox>

        <FlexBox className="mt5 justify-between">
          <AboutCard name="john doe" title="the designer" />
          <AboutCard name="john doe" title="the designer" />
          <AboutCard name="john doe" title="the designer" />
        </FlexBox>
      </div>
    );
  }
}

export default About;
