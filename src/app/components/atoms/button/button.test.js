import React from 'react';
import {Button} from './button';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

test('button test', () => {
    const tree = renderer.create(<Button>test</Button>).toJSON();

    expect(tree).toMatchSnapshot();
});
