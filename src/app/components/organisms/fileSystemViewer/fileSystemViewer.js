import React, {Component} from 'react';

import {FileSystemContainer} from '../../molecules/fileSystemContainer/fileSystemContainer';
import {PlusContainer} from '../../molecules/plusContainer/plusContainer';

export class FileSystemViewer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            qa = false,
            data = {},
            handleSubmit = null,
        } = this.props;


        const folderItems = (data) => {
            const foldersRes = data.map((folders) => 
                <div key={folders.folder + "__key"}>
                    <PlusContainer>
                        <FileSystemContainer>
                            {folders.folder}
                        </FileSystemContainer>
                    </PlusContainer>
                </div >
            );
            return foldersRes;
        }

        const dataStub = [
            {
                folder: 'hi',
                files: ['hi file 1', 'hi file 2']
            },
            {
                folder: 'lol',
                files: ['lol file 1', 'lol file 2']
            },
            {
                folder: 'kek',
                files: ['kek file 1', 'kek file 2']
            },
        ]

        return (
            <>
                {folderItems(dataStub)}
            </>
        );
    };
}
