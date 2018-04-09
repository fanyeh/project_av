import React, { Component } from 'react';
import FlexBox from '@common/FlexBox';
import FlexColumn from '@common/FlexColumn';
import Intro from '@common/Intro';
import BlogCard from './BlogCard';

class Blog extends Component {
  render() {
    return (
      <FlexColumn className="mb5">
        <Intro
          header="News"
          subtitle="Updates from studio"
          description="Get all information about our studio from latest news posts & updates page."
          childrenStyle="pl2-1"
        >
          <BlogCard src="https://images.unsplash.com/photo-1474508297924-60ae8de135eb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2c6698db6b39b2d55c3cbb7143cac667&auto=format&fit=crop&w=1267&q=80" />
        </Intro>
        <FlexBox>
          <FlexColumn className="w-50-l w-100 pr2-l">
            <BlogCard src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e4bd9adcc099aae35262514583fbbf7&auto=format&fit=crop&w=1500&q=80" />
            <BlogCard src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f9f0fdc18a215ec725f8ca61dc6fcbdf&auto=format&fit=crop&w=1500&q=80" />
          </FlexColumn>
          <FlexColumn className="w-50-l w-100 pl2-l">
            <BlogCard src="https://images.unsplash.com/photo-1503631285924-e1544dce8b28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1fdf34e95ab3d91d658e3c84dd5d5564&auto=format&fit=crop&w=634&q=80" />
            <BlogCard src="https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3d73d547d2c12d8873205c78f88bea5f&auto=format&fit=crop&w=1500&q=80" />
          </FlexColumn>
        </FlexBox>
      </FlexColumn>
    );
  }
}

export default Blog;
