import React from 'react';

export const App = React.createClass({
  getInitialState() {
    return {
      count: 0, // The initial count
    };
  },

  handleIncrement() {
    var newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  },

  handleDecrement() {
    var newCount = this.state.count - 1;
    this.setState({
      count: newCount,
    });
  },

  render() {
    return (
      <div className='App Counter'>
        <img src='https://facebook.github.io/react/img/logo.svg' alt='React Logo' />
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </div>
      </div>
    );
  },
});
