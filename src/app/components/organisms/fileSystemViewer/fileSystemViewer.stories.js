import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {FileSystemViewer} from 'App/components/organisms/fileSystemViewer/fileSystemViewer';

storiesOf('File system viewer', module)
    .add('default', () => (
        <FileSystemViewer/>
    ))
    .add('with qa', () => (
        <FileSystemViewer qa={true}/>
    ))
