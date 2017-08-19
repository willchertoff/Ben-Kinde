import React from 'react';

import Layout from '../../components/Layout';

import Problem from './problem';

function action() {
  return {
    title: 'Uh Oh...',
    component: <Layout hideTitle><Problem /></Layout>,
  };
}

export default action;
