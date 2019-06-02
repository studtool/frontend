import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {PlusContainer} from 'App/components/molecules/plusContainer/plusContainer';
import {FileSystemContainer} from 'App/components/molecules/fileSystemContainer/fileSystemContainer';

storiesOf('plus container ', module)
    .add('default', () => (
        <PlusContainer>
            <FileSystemContainer>
                Название файла
            </FileSystemContainer>
        </PlusContainer>
    ))
    .add('with qa', () => (
        <PlusContainer qa={true}/>
    ))
