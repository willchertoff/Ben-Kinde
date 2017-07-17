import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../../components/Navigation';

const Home = ({ categories }) => (
  <div>
    <Navigation categories={categories} />
  </div>
);

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

Home.defaultProps = {
  categories: [],
};

export default Home;
