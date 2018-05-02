import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { time: new Date() };
    this.updateTime = this.updateTime.bind(this);
  }

  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }

  getMinutes() {
    return this.state.time.getMinutes() < 10
      ? `0${this.state.time.getMinutes()}`
      : this.state.time.getMinutes();
  }

  getHours() {
    return this.state.time.getHours();
  }

  updateTime() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <h1>
        {this.getHours()}:{this.getMinutes()}
      </h1>
    );
  }
}

export default Clock;
