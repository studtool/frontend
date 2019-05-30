import React from 'react';
import {FileSystemElement} from './fileSystemElement';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

test('file System Element test', () => {
    const stubSubmit = () => {};
    const stubChange = () => {};
    const data = {
        email__errorMessage: '',
        password__errorMessage: '',
        passwordRepeat__errorMessage: '',
    };

    const tree = renderer.create(
        <FileSystemElement
            handleSubmit={stubSubmit}
            handleChange={stubChange}
            data={data}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
