import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import normalizeCss from 'normalize.css';
import s from './Layout.css';

import Title from '../Title';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Title />
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
