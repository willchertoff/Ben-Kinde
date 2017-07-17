import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

import client from '../../contentful-client';

async function action() {
  try {
    const resp = await client.getEntries({ content_type: 'projectCategory' });
    const categories = await resp.items;
    return {
      chunks: ['home'],
      title: 'Home',
      component: <Layout><Home categories={categories} /></Layout>,
    };
  } catch (error) {
    /* Need to implement Logging HERE */
    return {
      redirect: '/problem',
    };
  }
}

export default action;
