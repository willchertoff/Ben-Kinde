import React from 'react';
import PropTypes from 'prop-types';

/* grab database */
import client from '../../contentful-client';

const styles = {
  fontSize: '38px',
  margin: '1em 0 0 1em',
  fontFamily: 'GaramondPremrPro-Med',
};

export default class Title extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  }
  static defaultProps = {
    text: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }

  componentDidMount() {
    client.getEntries({ content_type: 'title' })
      .then(res => this.setState({ text: res.items[0].fields.text }));
  }
  render() {
    const {
      text,
    } = this.state;

    return (
      <h1 style={styles}>{text}</h1>
    );
  }
}
