import React from 'react';
import Portfolio from './Portfolio';
import Layout from '../../components/Layout';

async function action() {
  return {
    chunks: ['portfolio'],
    title: 'Portfolio',
    component: <Layout><Portfolio /></Layout>,
  };
}

export default action;
