import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './index.css';

import Link from '../Link';

/* grab database */
import client from '../../contentful-client';

const linkStyle = {
  textDecoration: 'none',
  display: 'block',
  width: '100%',
};

class ProjectMenu extends React.Component {
  static propTypes = {
    activeCategory: PropTypes.any,
  }

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }
  componentDidMount = () => {
    this.getProjects(this.props.activeCategory);
  }
  componentWillReceiveProps = nextProps =>
    this.getProjects(nextProps.activeCategory);

  getProjects = (category) => {
    client.getEntries({
      content_type: 'projectCategory',
      'fields.categoryTitle': category,
    })
    .then((entries) => {
      this.setState({
        projects: entries.items[0].fields.projects || [],
      });
    });
  }
  render() {
    return (
      <div
        className={s.root}
        style={{
          opacity: this.state.projects.length > 0 ? 1 : 0,
        }}
      >
        <div className={s.container}>
          {
            this.state.projects.length > 0 ? (
              this.state.projects.map(project => (
                <Link key={project.fields.title} to={`/projects/${project.fields.slug}`} style={linkStyle} >
                  {project.fields.title}
                </Link>
              ),
              )
            ) : (
              ''
            )
          }
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ProjectMenu);
