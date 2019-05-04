import React from 'react';
import {InputText} from './inputText';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

test('inputText test', () => {
    const stubFunc = () => {};

    const tree = renderer.create(
        <InputText
            qa='test-input'
            name="testName"
            type="password"
            value="thisValue"
            onChange={stubFunc}
        >
            test
        </InputText>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
