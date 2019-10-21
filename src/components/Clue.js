import React, { Component } from 'react';

class Clue extends Component {
  render() {
    const { answer, question, value } = this.props.clue;

    return (
      <div className='mw9 center pa4 pt5-ns ph7-l'>
        <h4>{value || 'empty'}</h4>
        <hr />
        <h5>{question}</h5>
        <hr />
        <h5>{answer}</h5>
      </div>
    )
  }
}

export default Clue;