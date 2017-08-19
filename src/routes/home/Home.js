import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import anime from 'animejs';

import video from './test.webm';

import s from './Home.css';

const animationTimeLine = () => anime.timeline()
  // .add({
  //   targets: '#video-overlay',
  //   opacity: 0,
  //   zIndex: 1,
  //   easing: 'easeInOutCirc',
  //   duration: 3000,
  //   elasticity: 100,
  // })
  .add({
    targets: '#home-title',
    opacity: 1,
    easing: 'easeInOutCirc',
    offset: '+=3000',
    duration: 2000,
    elasticity: 500,
  });

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoLoaded: false,
      navVisible: false,
    };
  }
  videoLoaded = () => {
    this.setState({
      videoLoaded: true,
    });
    animationTimeLine();
  }
  render() {
    return (
      <div className={s.root}>
        <video className={s.video} id="home-video" autoPlay muted loop onCanPlayThrough={this.videoLoaded}>
          <source src={video} />
        </video>
        <div
          className={s.background}
          id="video-overlay"
        />
        <div className={s.container}>
          <h1
            className={s.title}
            id="home-title"
          >
            Loosely Defined.<br />Tightly Knit.
          </h1>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
