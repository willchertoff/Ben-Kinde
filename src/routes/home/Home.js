import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

import Navigation from '../../components/Navigation';
import Title from '../../components/Title';

class Home extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Title />
          <Navigation />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
