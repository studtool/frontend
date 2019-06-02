import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'App/components/atoms/button/button';

storiesOf('Button', module)
    .add('button default', () => (
        <Button>Button</Button>
    ));
