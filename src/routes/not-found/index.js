import React from 'react';
import Layout from '../../components/Layout';
import NotFound from './NotFound';

const text = `Ooops we couldn't find anything!`;

function action() {
  return {
    chunks: ['not-found'],
    title: 'Not Found',
    component: <Layout><NotFound text={text} /></Layout>,
    status: 404,
  };
}

export default action;
