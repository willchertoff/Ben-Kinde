/* eslint-disable no-nested-ternary */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './index.css';

const linkStyle = (activeCategory, name) => ({
  display: 'block',
  letterSpacing: '1px',
  textDecoration: 'none',
  lineHeight: '2em',
  opacity: activeCategory ? (
    activeCategory === name ? 1 : 0.1
  ) : (
    1
  ),
});

const symbolStyle = (activeCategory, name) => ({
  visibility: activeCategory ? (
    activeCategory === name ? 'visible' : 'hidden'
  ) : (
    'visible'
  ),
})

const NavigationLink = ({ onClick, activeCategory, name }) => (
  <div className={s.link} style={linkStyle(activeCategory, name)}>
    <a
      key={name}
      role="presentation"
      onClick={() => onClick(name)}
    >
      {name}
    </a>
  </div>
);

export default withStyles(s)(NavigationLink);