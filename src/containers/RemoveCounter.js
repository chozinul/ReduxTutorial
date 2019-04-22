import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCounter } from '../actions';
import { bindActionCreators } from 'redux';

class RemoveCounter extends Component {

   render() {
     return (
           <div className="container">
            <form>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" 
                      onClick={(e) => {e.preventDefault();this.props.dispatch(removeCounter())}}>
                      Remove {this.props.count}
                  </button>
                </div>
              </div>
            </form>
            </div>
     )
   }
}

// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(removeCounter, dispatch) }
// }

function mapDispatchToProps(dispatch) {
  let actions = bindActionCreators({ removeCounter });
  return { ...actions, dispatch };
}

function mapStateToProps(state){
  return {
    count: state.counterReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveCounter);