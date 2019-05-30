import React from 'react';
import {FileSystemViewer} from './fileSystemViewer.js';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

test('signUp Form test', () => {
    const stubSubmit = () => {};
    const stubChange = () => {};
    const data = {
        email__errorMessage: '',
        password__errorMessage: '',
        passwordRepeat__errorMessage: '',
    };

    const tree = renderer.create(
        <FileSystemViewer
            handleSubmit={stubSubmit}
            handleChange={stubChange}
            data={data}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
