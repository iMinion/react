import React, {Component} from 'react';
import './App.css';
import './bootstrap.min.css'

class AuthorQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => {clicks: ++state.clicks});
  }

  render() {
    return (
      <div onClick={() => {this.setState((state) => ({clicks: this.state.clicks + 1})) }}>This div has been clicked {this.state.clicks} number of times</div>
    );
  }
}

export default AuthorQuiz;
