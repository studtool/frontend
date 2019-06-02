import React from 'react';
import Header from './header';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {BrowserRouter} from 'react-router-dom';


test('Header test', () => {
    const tree = renderer.create(
        <BrowserRouter>
            <Header>
                test
            </Header>
        </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
