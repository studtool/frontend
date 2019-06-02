import React from 'react';
import {FileSystemContainer} from './fileSystemContainer';
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
        <FileSystemContainer
            handleSubmit={stubSubmit}
            handleChange={stubChange}
            data={data}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
