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
      />)
      if (state) component.setState(state);
      return component;
    }

    describe('App Component', () => {

      let component = setUp()
      it('Should render without error', () => {
        const appComponent = findByTestAttr(component, 'component-app');
        expect(appComponent.length).toBe(1)
      });

      it('Should render Increment Button', () => {
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
      });

      describe('Decrement', () => {
        test('renders decrement button', () => {
          const wrapper = setUp();
          const button = findByTestAttr(wrapper, 'decrement-button');
          expect(button.length).toBe(1);
        });
        test('Clicking decrement button decrements counter display when state is greater than 0', () => {
          const counter = 7;
          const component = setUp(null, {
            counter
          });

          const button = findByTestAttr(component, 'decrement-button');
          button.simulate('click');
          component.update();

          const counterRender = findByTestAttr(component, 'counter-render');
          expect(counterRender.text()).toContain(counter - 1)
        });

        it('error does not show when not needed', () => {
          const component = setUp();
          const errorDiv = findByTestAttr(component, 'error-message');

          const errorHasHiddenClass = errorDiv.hasClass('hidden');
          expect(errorHasHiddenClass).toBe(true);
        });

        describe('counter is 0 and decrement is clicked', () => {

          let component
          beforeEach(() => {
            component = setUp();

            const button = findByTestAttr(component, 'decrement-button');
            button.simulate('click');
            component.update();
          });

          it('error shows', () => {
            const errorDiv = findByTestAttr(component, 'error-message');
            const errorHasHiddenClass = errorDiv.hasClass('hidden');
            expect(errorHasHiddenClass).toBe(false);
          });

          it('counter still displays 0', () => {
            const counterDisplay = findByTestAttr(component, 'counter-render');
            expect(counterDisplay.text()).toContain(0);
          });

          it('clicking increment clears the error', () => {
            const button = findByTestAttr(component, 'increment-button');
            button.simulate('click');

            const errorDiv = findByTestAttr(component, 'error-message');
            const errorHasHiddenClass = errorDiv.hasClass('hidden');
            expect(errorHasHiddenClass).toBe(true);
          });
        });
      });
    });