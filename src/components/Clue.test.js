import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Clue } from './Clue';
import { clue } from '../data/fixtures';

configure({ adapter: new Adapter() });

const props = { clue };

describe('Clue', () => {
  const clueWrapper = shallow(<Clue {...props} />);

  it('renders the clue value', () => {
   // console.log(clueWrapper.debug())
   expect(clueWrapper.find('b').at(0).text()).toEqual(clue.value.toString()); // this should fail without the value
  });

  it('renders the clue question', () => {
    expect(clueWrapper.find('b').at(1).text()).toEqual(clue.question);
  });

  it('renders the clue answer', () => {
    expect(clueWrapper.find('span').text()).toEqual(clue.answer);
  });

  it('sets the class of answer to text-hidden', () => {
    expect(clueWrapper.find('span').hasClass('f5 db lh-copy measure o-90')).toBe(true);
  });

  it('initialises with reveal state set to false', () => {
    expect(clueWrapper.state().reveal).toBe(false);
  });
});