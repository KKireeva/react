import React, {Component} from 'react';
import {TextField, Button} from '@material-ui/core';

export default class AddMessage extends Component {
    state = {
        text: ''
    }

    textInput = React.createRef();

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state.text);
        this.setState({
            text: ''
        });
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    /*componentDidUpdate(prevProps) {
        if (this.props.chatId !== prevProps.chatId) {
            this.textInput.current.focus();
        }
    }*/

    render() {
        return (
            <form style={{width: '100%', marginTop: '20px', display: 'flex'}} onSubmit={this.onSubmit}>
                <TextField type='text'
                    label='Write a message...'
                    onChange={this.onValueChange}
                    value={this.state.text}
                    inputRef={ this.textInput }
                    variant='outlined'
                    style={{width: '100%'}}
                />
                <Button variant='contained' color='primary' size='large' type='submit'>Add</Button>
            </form>
        )
    }
}