import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {SignUpForm} from 'App/components/organisms/signUpForm/signUpForm';

storiesOf('Sign Up form', module)
    .add('default', () => (
        <SignUpForm/>
    ))
    .add('with qa', () => (
        <SignUpForm qa={true}/>
    ))
