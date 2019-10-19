import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    fetch('http://jservice.io/api/categories?count=20')
      .then(response => response.json())
      .then(json => console.log(json));
  }

  render() {
    return(
      <div>
        <h1 className='helvetica f-headline lh-solid'>Jeopardy!</h1>
      </div>
    );
  }
}

export default App;