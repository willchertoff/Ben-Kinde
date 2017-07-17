import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  fontSize: '38px',
  margin: '2em 0 0 2em',
  fontFamily: 'Gilroy-ExtraBold',
  letterSpacing: '2px',
};

export default class Title extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    hideTitle: PropTypes.bool,
  }
  static defaultProps = {
    text: 'Ben Kinde',
  }

  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }
  render() {
    const {
      text,
    } = this.state;

    if (this.props.hideTitle) {
      return <div />;
    }
    return (
      <h1 style={styles}>{text}</h1>
    );
  }
}
