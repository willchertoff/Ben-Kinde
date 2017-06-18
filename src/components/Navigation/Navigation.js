import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import client from '../../contentful-client';

import NavigationLink from '../NavigationLink';

import s from './index.css';

const styles = {
  margin: '26px 0 0 76px',
  fontFamily: 'Gilroy-Light',
  textTransform: 'uppercase',
};

const linkStyle = {
  display: 'block',
  fontFamily: 'Gilroy-Light',
  fontSize: '36px',
  letterSpacing: '1px',
  textDecoration: 'none',
  lineHeight: '2em',
};

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projectCategories: [],
      activeCategory: null,
      stage: 'clear',
    };
  }

  componentDidMount() {
    client.getEntries({ content_type: 'projectCategory' })
      .then((entries) => {
        this.setState({
          projectCategories: this.state.projectCategories.concat(entries.items),
        });
      });
  }

  setActiveCategory = (category) => {
    let toSet = category;
    if (this.state.activeCategory === category) {
      toSet = null;
    }
    this.setState({
      activeCategory: toSet,
    });
  }
  render() {
    return (
      <div style={styles} className="nav">
        <div className={s.pane_1}>
          {
            this.state.projectCategories.map(category => (
              <NavigationLink
                key={category.fields.categoryTitle}
                activeCategory={this.state.activeCategory}
                name={category.fields.categoryTitle}
                onClick={this.setActiveCategory}
              />
            ),
            )
          }
        </div>
        <div className={s.pane_2}>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
