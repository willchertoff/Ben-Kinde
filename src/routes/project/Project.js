import React from 'react';
import marked from 'marked';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './index.css';

import Link from '../../components/Link';

const linkStyle = {
  fontFamily: 'Gilroy-Bold',
  letterSpacing: '1px',
  color: '#9a9790',
};

const Project = ({ title, body }) => {

  const getParsedMarkdown = (content) => ({
    __html: marked(body)
  });
  return (
    <div className={s.root}>
      <div className={s.back}>
        <Link to="/" style={linkStyle}>Back</Link>
      </div>
      <div className={s.project}>
        <h1 className={s.title}>{title}</h1>
        <div className={s.body}>
          <div dangerouslySetInnerHTML={getParsedMarkdown(body)} />
        </div>
      </div>
    </div>
  );
};

export default withStyles(s)(Project);
