import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {AddButton} from 'App/components/atoms/addButton/addButton';

storiesOf('AddButton', module)
    .add('AddButton default', () => (
        <AddButton/>
    ));
