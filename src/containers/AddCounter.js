import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter, setHistory } from '../actions';
import { bindActionCreators } from 'redux';

class AddCounter extends Component {



  render() {

    const count = this.props.count;

    return (
      <div className="container">
        <form>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary"
                onClick={(e) => { 
                  e.preventDefault(); 
                  this.props.dispatch(addCounter(2));
                  this.props.dispatch(setHistory(count));
                 }}
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  let actions = bindActionCreators({ addCounter })
  return { ...actions, dispatch }
}

function mapStateToProps(state){
  return { count: state.counterReducer }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCounter);