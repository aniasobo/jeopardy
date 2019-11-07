import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';
import { categories } from '../data/fixtures';

configure({ adapter: new Adapter() });
const props = { categories };

describe('App', () => {
  const app = shallow(<App {...props} />);
  console.log("APPPPPP", app.props.categories);

  it('renders title', () => {
    expect(app.find('h1').text()).toEqual('Jeopardy!');
  });

  it('renders the correct number of links', () => {
    expect(app.find('Link').length).toEqual(categories.length);
  });

  it('generates correct link titles', () => {
    app.find('Link h4').forEach((linkTitle, index) => {
      expect(linkTitle.text()).toEqual(categories[index].title);
    })
  });
});