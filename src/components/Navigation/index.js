import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

const leftCol = style =>
  (<div className={s.left_col__inner} style={style} >
    <Link to="/contact" className={s.contact}>Contact</Link>
    <Link to="/" className={s.home}>Home</Link>
    <Link to="/about" className={s.about}>About</Link>
  </div>);

const rightCol = style =>
  (<div className={s.left_col__inner} style={style}>
    Navigation Right Side
  </div>);

const initialStyle = {
  width: '150px',
  left: -150,
  opacity: 0,
  transition: 'opacity 1s ease, left 1s ease',
  position: 'relative',
};

const initialStyleRight = {
  width: '150px',
  right: -150,
  opacity: 0,
  transition: 'opacity 1s ease, right 1s ease',
  position: 'relative',
};

const finalStyle = {
  width: '150px',
  opacity: 1,
  left: 0,
  transition: 'opacity 1s ease, left 1s ease',
  position: 'relative',
};

const finalStyleRight = {
  width: '150px',
  right: 0,
  opacity: 1,
  transition: 'opacity 1s ease, right 1s ease',
  position: 'relative',
};

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div
          className={s.left_col}
          onMouseEnter={this.props.showNav}
          onMouseLeave={this.props.hideNav}
        >
          {
            this.props.visible ? (
              leftCol(finalStyle)
            ) : (
              leftCol(initialStyle)
            )
          }
        </div>
        <div
          className={s.right_col}
          onMouseEnter={this.props.showNav}
          onMouseLeave={this.props.hideNav}
        >
          {
            this.props.visible ? (
              rightCol(finalStyleRight)
            ) : (
              rightCol(initialStyleRight)
            )
          }
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
