import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {FileSystemContainer} from 'App/components/molecules/fileSystemContainer/fileSystemContainer';

storiesOf('File system container ', module)
    .add('default', () => (
        <FileSystemContainer>
            Название файла
        </FileSystemContainer>
    ))
    .add('with qa', () => (
        <FileSystemContainer qa={true}/>
    ))
