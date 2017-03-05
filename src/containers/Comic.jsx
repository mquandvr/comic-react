import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ComicAction from '../actions/ComicAction';

class Comic extends Component {
    constructor(props) {
        super(props);

        this.executeAction = this.executeAction.bind(this);
    }

    executeAction() {
      const params = {
        type: 'INCREMENT',
        id: 'COMIC'
      };
      this.props.dispatch(ComicAction(params.id, params));
    }

    render() {
      return (
        <div>
        <div> Hello World </div>
        <button onClick={this.executeAction}>Click</button>
      </div>
      );
    }
  }


function mapStateToProps(state, ownProps) {
  return state;
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(ComicAction, dispatch)
  };
};

const ComicRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comic);

export default ComicRedux;
