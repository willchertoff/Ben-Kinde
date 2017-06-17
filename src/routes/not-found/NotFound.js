import React from 'react';
import Link from '../../components/Link';

const styles = {
  fontSize: '38px',
  textAlign: 'center',
  fontFamily: 'GaramondPremrPro-Med',
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
};

const linkStyle = {
  display: 'block',
  fontFamily: 'ProximaNova-Regular',
  fontSize: '16px',
  letterSpacing: '1px',
  color: 'black',
  lineHeight: '3em',
  textAlign: 'center',
};

export default ({ text }) => (
  <div style={containerStyles}>
    <div style={messageStyles}>
      <h1 style={styles}>{text}</h1>
      <Link style={linkStyle} to="/">Back Home</Link>
    </div>
  </div>
);
