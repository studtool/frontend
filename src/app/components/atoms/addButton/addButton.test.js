import React from 'react';
import {AddButton} from './addButton';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

test('button test', () => {
    const tree = renderer.create(<AddButton/>).toJSON();

    expect(tree).toMatchSnapshot();
});
