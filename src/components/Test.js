import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { test } from '../actions/index';

class Test extends Component {

    handleClick(){
        this.props.test();
    }
  render() {
    return (
      <div>
          <button onClick={this.handleClick.bind(this)}>Test</button>
      </div>
    )
  }
}

Test.propTypes = {
	test: PropTypes.func.isRequired,	
};

const mapStateToProps = (state) => ({
	test: state.test,	
});

export default connect(mapStateToProps, { test })(Test);