import React, {Component} from 'react';
import {Label} from '../../atoms/label/label';
import {InputTextField} from '../../atoms/inputTextField/inputTextField.js';

export class EditorLine extends Component {
    render() {
        const qa = this.props.qa ? this.props.qa : 'no-qa';
        const inputProps = ( ( {children, ...others} ) => ({...others}))(this.props);
        return (
            <>
                <div qa={qa}>
                    <Label>
                        {this.props.children}

                        <InputTextField
                            {...inputProps}
                        />
                    </Label>
                </div>
            </>
        );
    }
}
