import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
  render() {
    return (
      <div className='mw9 center pa4 pt5-ns ph7-l'>
        <Link to='/'><h4>Home</h4></Link>
        <h3 className='f2 f1-m f-headline-l measure-narrow lh-title mv0'>Hard coded title of category</h3>
      </div>
    );
  }
}

export default Category;