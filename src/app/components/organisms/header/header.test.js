import React from 'react';
import Header from './header';
import renderer from 'react-test-renderer'
import 'jest-styled-components'

test('Header test', () => {
    const tree = renderer.create(
        <Header>
            test
        </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
