import React from 'react';
import PropTypes from 'prop-types';
import s from './FullScreenVideo.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class FullScreenVideoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 'auto',
      height: 'auto',
    };
  }
  componentDidMount = () => {
    this.makeFullScreen();
    window.addEventListener('resize', this.makeFullScreen);
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize');
  }
  makeFullScreen = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  render() {
    return (
      <div className={s.root} />
    );
  }
}

export default withStyles(s)(FullScreenVideoContainer);
