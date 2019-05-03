import React from 'react';
import {SignUpForm} from './signUpForm';
import renderer from 'react-test-renderer'
import 'jest-styled-components'

test('signUp Form test', () => {
    const stubSubmit = () => {};
    const stubChange = () => {};
    const data = {
            email__errorMessage: '',
            password__errorMessage: '',
            passwordRepeat__errorMessage: ''
        };
    
    const tree = renderer.create(
        <SignUpForm 
            handleSubmit={stubSubmit} 
            handleChange={stubChange}
            data={data}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
