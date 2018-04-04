import React, { Component } from 'react';
import FlexColumn from '@common/FlexColumn';
import HomeCard from './HomeCard';

class Home extends Component {
  render() {
    return (
      <div className="w-100">
        <div className="flex w-60 center justify-around ">
          <FlexColumn className={['w-49']}>
            <HomeCard src="https://images.unsplash.com/photo-1510776632413-f3e527a8dc42?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a5703227ec13ae76e69fda1ad27da26f&auto=format&fit=crop&w=1500&q=80" />
            <HomeCard src="https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=356e51bd6087fc6c9f488f7a3b584ceb&auto=format&fit=crop&w=634&q=80" />
            <HomeCard src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc36f6ef9f5f60d81144f40cb6cbfc38&auto=format&fit=crop&w=1267&q=80" />
          </FlexColumn>
          <FlexColumn className={['w-49']}>
            <HomeCard src="https://images.unsplash.com/photo-1519226798720-5c7704fae36e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=533eaf1316d32b1d9947613f4292af27&auto=format&fit=crop&w=634&q=80" />
            <HomeCard src="https://images.unsplash.com/photo-1505308509987-f7f783ebabfc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e3bdbb41717970d8c1017225644c957&auto=format&fit=crop&w=1462&q=80" />
            <HomeCard src="https://images.unsplash.com/photo-1506882741710-98761c574b48?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=794de1f3a10ddf74c928e6cebd1aa55e&auto=format&fit=crop&w=1500&q=80" />
          </FlexColumn>
        </div>
      </div>
    );
  }
}

export default Home;
