import React from 'react';
import {InputTextField} from './inputTextField';
import renderer from 'react-test-renderer'
import 'jest-styled-components'

test('inputTextField test', () => {
    const tree = renderer.create(<InputTextField/>).toJSON();

    expect(tree).toMatchSnapshot();
});
