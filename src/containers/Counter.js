
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

  historyElements = () => {
    return this.props.history.map((count) => <li>{count}</li>)
  }

  render(){
    return (
      <div className="cotainer">
        <div className="notification">
          <h1>
            {this.props.count}
          </h1>
          <ul>
            {this.historyElements()}
          </ul>
        </div>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
    count: state.counterReducer,
    history: state.historyReducer
  };
}

export default connect(mapStateToProps)(Counter);