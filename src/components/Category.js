import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Clue from './Clue';

class Category extends Component {
  constructor() {
    super();

    this.state = { clues: [] }
  }

  componentDidMount() {
    fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`)
    .then(response => response.json())
    .then(json => this.setState({ clues: json }));
  }

  render() {
    return (
      <div className='mw9 center pa4 pt5-ns ph7-l'>
        <Link to='/' className='fw1 f3 mt3 mb4 helvetica'>Home</Link>
        <h3 className='helvetica f2 f1-m f-headline-l measure-narrow lh-title mv0'>{this.props.category.title}</h3>
          <ul className='list pl0 helvetica'>
          {
            this.state.clues.map(clue => {
              return (
                <Clue key={clue.id} clue={clue} />
              )
            })
          }
          </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { category: state.category }
}


export default connect(mapStateToProps, null)(Category);