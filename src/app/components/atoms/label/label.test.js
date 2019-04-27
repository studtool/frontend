import React from 'react';
import {Label} from './label';
import {colors} from '../style';
import renderer from 'react-test-renderer'
import 'jest-styled-components'

test('label test', () => {
    const tree = renderer.create(<Label/>).toJSON();
    expect(tree).toMatchSnapshot();
});
