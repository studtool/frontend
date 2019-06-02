import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {FileSystemElement} from 'App/components/atoms/fileSystemElement/fileSystemElement';

storiesOf('File system element ', module)
    .add('default', () => (
        <FileSystemElement title='Название файла'>
            Название файла
        </FileSystemElement>
    ))
    .add('with qa', () => (
        <FileSystemElement qa={true}/>
    ))
