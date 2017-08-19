import React from 'react';
import PropTypes from 'prop-types';

const withAnimation = WrappedComponent =>
  class extends React.Component {
    static propTypes = {
      initialStyle: PropTypes.objectOf(PropTypes.string).isRequired,
      finalStyle: PropTypes.objectOf(PropTypes.string).isRequired,
    }
    constructor(props) {
      super(props);
      this.state = {
        style: props.initialStyle,
      };
    }
    componentDidMount = () => {
      this.setState({
        style: this.props.finalStyle,
      });
    }
    componentWillReceiveProps = (nextProps) => {
      this.setState({
        style: nextProps.finalStyle,
      });
    }
    render() {
      return (
        <div style={this.state.style}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };

export default withAnimation;
