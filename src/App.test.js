import React from 'react';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createStore } from 'redux';

import App from './App';

configure({ adapter: new Adapter() });


describe('App', () => {
    it('interactua con nuestro store', () => {
        const prevent = jest.fn();
        const reducer = jest.fn().mockReturnValue({
            finanzas: [{ desc: 'lala', cant: 150 }]
        });
        const store = createStore(reducer);
        const wrapper = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );

        wrapper
            .find('input')
            .at(0)
            .simulate('change', { target: { value: 'lele' } });
        wrapper
            .find('input')
            .at(1)
            .simulate('change', { target: { value: 200 } });
        wrapper
            .find('form')
            .simulate('submit', { preventDefault: prevent });
        wrapper
            .find('button')
            .at(1)
            .simulate('click')

        const [a, ...rest] = reducer.mock.calls;
        expect(rest).toEqual([
            [
                { finanzas: [{ desc: 'lala', cant: 150 }] },
                { type: 'AGREGAR', payload: { cant: 200, desc: 'lele' } }
            ],
            [
                { finanzas: [{ desc: 'lala', cant: 150 }] },
                { type: 'ELIMINAR', index: 0 }
            ]
        ])

        expect(wrapper.text().includes('lala')).toEqual(true);
        expect(wrapper.text().includes('Finanzly')).toEqual(true);
    });
});