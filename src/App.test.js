import React from 'react';
import {
  findByTestAttr
} from '../utils/index'
import {
  shallow
} from 'enzyme';
import App from './App';

import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});

const setUp = () => {
  const component = shallow( < App / > );
  return component;
};

describe('App Component', () => {

  let component = setUp()
  it('Should render without error', () => {
    const appComponent = findByTestAttr(component, 'component-app');
    expect(appComponent.length).toBe(1)
  });

  it('Should render Button', () => {
    const button = findByTestAttr(component, 'increment-button');
    expect(button.length).toBe(1)
  });

  it('Should render Counter', () => {
    const counterRender = findByTestAttr(component, 'counter-render');
    expect(counterRender.length).toBe(1)
  });

  it('Should  starts with 0', () => {

  });

  it('Click Should increment Counter', () => {

  })
})