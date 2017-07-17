import React from 'react';

import Link from '../../components/Link';

const styles = {
  fontSize: '38px',
  textAlign: 'center',
  fontFamily: 'GaramondPremrPro-Med',
  color: '#9a9790',
};

const containerStyles = {
  position: 'fixed',
  width: '100%',
  height: '100%',
};

const messageStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
};

const linkStyle = {
  display: 'block',
  fontFamily: 'Gilroy-Light',
  fontSize: '16px',
  letterSpacing: '1px',
  color: '#9a9790',
  lineHeight: '3em',
  textAlign: 'center',
};

export default () => (
  <div style={containerStyles}>
    <div style={messageStyles}>
      <h1 style={styles}>So Embarrasing.</h1>
      <Link style={linkStyle} to="/">Back Home</Link>
    </div>
  </div>
);
