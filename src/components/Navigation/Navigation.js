import React from 'react';

import client from '../../contentful-client';

import Link from '../Link';

const styles = {
  margin: '26px 0 0 38px',
  fontFamily: 'ProximaNova-Regular',
  textTransform: 'uppercase',
};

const linkStyle = {
  display: 'block',
  fontFamily: 'ProximaNova-Regular',
  fontSize: '18px',
  letterSpacing: '1px',
  color: 'black',
  textDecoration: 'none',
  lineHeight: '2em',
};

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [],
    };
  }

  componentDidMount() {
    client.getEntries({ content_type: 'primaryNavigation' })
      .then((entries) => {
        this.setState({
          links: this.state.links.concat(entries.items['0'].fields.primaryNavigationLinks),
        });
      });
  }
  render() {
    return (
      <div style={styles} className="nav">
        {
          this.state.links.map(link => (
            <Link
              key={link.fields.slug}
              to={link.fields.slug}
              style={linkStyle}
            >
              {link.fields.text}
            </Link>
          ),
          )
        }
      </div>
    );
  }
}
