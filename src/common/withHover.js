import React from 'react';
import classNames from 'classnames';

const withHover = styles => WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { styles };
    }

    hover = () => {
      let newStyles = this.state.styles.slice();
      newStyles.includes('hover') ? newStyles.pop() : newStyles.push('hover');
      this.setState({ styles: newStyles });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          classes={classNames(this.state.styles)}
          hover={this.hover}
        />
      );
    }
  };
};

export default withHover;
