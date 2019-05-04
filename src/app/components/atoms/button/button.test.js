import React from 'react';
import {Button} from './button';
import {colors} from '../style';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

test('button test', () => {
    const tree = renderer.create(<Button>test</Button>).toJSON();

    expect(tree).toHaveStyleRule('color', colors.textOnPrimary);
    expect(tree).toHaveStyleRule('background', colors.primary);
    expect(tree).toHaveStyleRule('border', 'none');
    expect(tree).toHaveStyleRule('border-radius', '5px');
    expect(tree).toHaveStyleRule('outline', 'none');

    expect(tree).toHaveStyleRule('background', colors.primaryDark, {
        modifier: ':hover',
    });

    expect(tree).toMatchSnapshot();
});
