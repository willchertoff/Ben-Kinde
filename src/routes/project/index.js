import React from 'react';
import Project from './Project';
import Layout from '../../components/Layout';

import client from '../../contentful-client';

async function action({ path }) {
  if (!path) {
    return {
      redirect: '/notFound',
    };
  }

  const resp = await client.getEntries({
    content_type: 'project',
    'fields.slug': path.replace(/\//g, ''),
  });
  const project = await resp.items[0].fields;

  if (!project) {
    return {
      redirect: '/notFound',
    };
  }
  return {
    title: 'Project',
    component: <Layout><Project title={project.title} body={project.body} /></Layout>,
  };
}

export default action;
