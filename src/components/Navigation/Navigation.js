import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';

import NavigationLink from '../NavigationLink';
import ProjectMenu from '../ProjectMenu';

import s from './index.css';

const styles = {
  margin: '26px 0 0 76px',
};

class Navigation extends React.Component {

  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      projectCategories: props.categories,
      activeCategory: null,
      stage: 'clear',
    };
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
      <div style={styles} className={s.root}>
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
        {
          this.state.activeCategory ? (
            <ProjectMenu
              activeCategory={this.state.activeCategory}
            />
          ) : ('')
        }
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
