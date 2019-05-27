import React, {Component} from 'react';
import {Label} from '../../atoms/label/label';
import {InputTextField} from '../../atoms/inputTextField/inputTextField.js';

export class InputText extends Component {

    render() {
        const {
            children,
            ...other
        } = this.props;

        const qa = this.props.qa ? this.props.qa : 'no-qa';
        return (
            <>
                <div qa={qa}>
                    <Label>
                        {children}

                        <InputTextField
                            {...other}
                        />
                    </Label>
                </div>
            </>
        );
    }
}
