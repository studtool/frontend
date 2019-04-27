import React from 'react';
import {InputTextField} from './inputTextField';
import {colors} from '../style';
import renderer from 'react-test-renderer'
import 'jest-styled-components'

test('inputTextField test', () => {
    const tree = renderer.create(<InputTextField/>).toJSON();

    expect(tree).toHaveStyleRule('color', colors.brlack);
    expect(tree).toHaveStyleRule('background', colors.white);
    expect(tree).toHaveStyleRule('border', 'none');
    expect(tree).toHaveStyleRule('border-bottom', '1px solid '+colors.gray);
    expect(tree).toHaveStyleRule('border-bottom', '2px solid '+colors.black, {
        modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('border-bottom', '2px solid '+colors.primaryDark, {
        modifier: ':focus',
    });

    expect(tree).toHaveStyleRule('outline', 'none');

    expect(tree).toMatchSnapshot();
});
