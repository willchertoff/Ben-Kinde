import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import normalizeCss from 'normalize.css';
import s from './Layout.css';

import Navigation from '../Navigation';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    hideTitle: PropTypes.bool.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      navVisible: false,
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this._showNav();
    }, 8000);
    setTimeout(() => {
      this._hideNav();
    }, 11000);
  }
  _showNav = () => {
    this.setState({
      navVisible: true,
    });
  }
  _hideNav = () => {
    this.setState({
      navVisible: false,
    });
  }
  render() {
    return (
      <div>
        <Navigation
          showNav={this._showNav}
          hideNav={this._hideNav}
          visible={this.state.navVisible}
        />
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
