import React from 'react';
import {PlusContainer} from './plusContainer';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

test('file System Container test', () => {
    const stubSubmit = () => {};
    const stubChange = () => {};
    const data = {
        email__errorMessage: '',
        password__errorMessage: '',
        passwordRepeat__errorMessage: '',
    };

    const tree = renderer.create(
        <PlusContainer
            handleSubmit={stubSubmit}
            handleChange={stubChange}
            data={data}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
