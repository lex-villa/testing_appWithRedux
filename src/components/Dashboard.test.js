import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Dashboard from './Dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard', () => {
    it('muestra valor', () => {
        const wrapper = shallow(<Dashboard valor={1000} />);

        const resultado = wrapper
            .text()
            .includes('1000');

        expect(resultado).toEqual(true);
    });
});