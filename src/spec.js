import React from 'react';
import {
  findByTestAttr
} from '../utils/index'
import {
  shallow
} from 'enzyme';
import App from './App';


const setUp = (props = {}, state = null) => {
    const component = shallow( < App {
        ...props
      }
      / > );
      if (state) component.setState({
        state
      })
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
        const wrapper = setUp();
        const initialCounterState = wrapper.state('counter')
        expect(initialCounterState).toBe(0)
      });

      it('Click Should increment Counter', () => {
        const counter = 0;
        const component = setUp(null, {
          counter
        });
        const button = findByTestAttr(component, 'increment-button');
        button.simulate('click');
        component.update();
        const counterRender = findByTestAttr(component, 'counter-render');
        expect(counterRender.text()).toContain(counter + 1)
      })
    })