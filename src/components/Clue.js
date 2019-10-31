import React, { Component } from 'react';

class Clue extends Component {
  constructor() {
    super();

    this.state = { reveal: false }
  }
  render() {
    const { answer, question, value } = this.props.clue;
    console.log("PROPS", this.props)

    return (
      <li className='pa3 pa4-ns bb b--black-10 helvetica' onClick={() => this.setState({ reveal: true })}>
        <b className='db f3 mb1 tc'>{this.props.clue.category.title} for {value || 'empty'}</b>
        <b className='db f3 mb1'>{question}</b>
        <hr />
        <span className={this.state.reveal ? 'f5 db lh-copy measure o-0' : 'f5 db lh-copy measure o-90'}>{answer}</span>
      </li>
    )
  }
}

export default Clue;