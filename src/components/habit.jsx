import React, { Component } from "react";

class Habit extends Component {
  componentDidMount() {
    console.log(`habit : ${this.props.habit.name}`);
  }
  // ㅅㅏ용자가 ui가 보여질때

  componentWillUnmount() {
    console.log(`habit : ${this.props.habit.name}`);
  }
  // ui가 지워질때

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    // Habit안에있는 Name과 couynt를 받는다 대신 이름이 같아야한다
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
