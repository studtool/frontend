import React, {Component} from 'react';
import {Button} from '../../atoms/button/button.js';
import {EditorLine} from '../../molecules/editorLine/editorLine.js';

export class EditorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false, 
            data: {},
            string: [],
        };
        
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount(){
        document.addEventListener('keypress', this.handleChange);
        document.addEventListener('click', this.handleClick);
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount(){
        document.removeEventListener('keypress', this.handleChange);
        document.removeEventListener('click', this.handleClick);
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown(e){
        switch (KeyboardHandler.handleSpecialKey(e)){
            case 'backspace': {
                if (this.state.isToggleOn){
                    this.setState(state => ({
                        string: state.string.slice(0, -1)
                    }));
                }
            }
        }
    }

    handleClick(e) {
        const elem = e.target ? e.target : '';
        const target = 'test';
        // TODO id -> class // this
        
        if (elem.id == target && !this.state.isToggleOn){
            this.setState(state => ({
                isToggleOn: !state.isToggleOn
            }));
        } else if (elem.id != target){
            this.setState({
                isToggleOn: false
            });
        }
    }

    handleChange(e) {
        console.log('change: ', KeyboardHandler.getChar(e), ` |${this.state.string}`)
        if (this.state.isToggleOn){
            this.setState(state => ({
                string: state.string.concat(KeyboardHandler.getChar(e)),
            }));
        }
    }

    render() {
        return (
            <>
                <div id='test'>
                    {this.state.isToggleOn ? 'ON  ' : 'OFF '}
                    {this.state.string}
                </div>
            </>
        );
    };
}


class KeyboardHandler {
    static getChar(event) {
        if (event.which == null) { // IE
          if (event.keyCode < 32) return null; // спец. символ
          return String.fromCharCode(event.keyCode)
        }
      
        if (event.which != 0 && event.charCode != 0) { // все кроме IE
          if (event.which < 32) return null; // спец. символ
          return String.fromCharCode(event.which); // остальные
        }
      
        return null; // спец. символ
    }

    /**
     * 
     * @param {*} event keyup / keydown
     */
    static handleSpecialKey(event){
        switch (event.keyCode){
            case 8 : return 'backspace'
            case 46: return 'delete'
        }
    }
}

