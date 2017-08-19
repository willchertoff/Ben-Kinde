import React from 'react';
import About from './About';
import Layout from '../../components/Layout';

async function action() {
  return {
    chunks: ['about'],
    title: 'About',
    component: <Layout><About /></Layout>,
  };
}

export default action;
