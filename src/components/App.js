import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategories } from '../actions';

class App extends Component {
  componentDidMount() {
    if (this.props.categories.length === 0) {
      fetch('http://jservice.io/api/categories?count=20')
      .then(response => response.json())
      .then(json => this.props.setCategories(json));
    }
  }

  render() {
    return(
      <div className='flex flex-column mw9 center pa4 pt5-ns ph7-l'>
        <h1 className='helvetica f-headline lh-solid'>Jeopardy!</h1>
        {
          this.props.categories.map(category => {
            return (
              <div className='outline w-70 pa3 mr2' key={category.id}>
                <Link to='/category' className='link dim dark-blue'><h4 className='f4 helvetica'>{category.title}</h4></Link>
              </div>
          );
        })
      }
      </div>
    );
  }
}

function  mapStateToProps(state) {
  return { categories: state }
}


export default connect(mapStateToProps, { setCategories })(App); 