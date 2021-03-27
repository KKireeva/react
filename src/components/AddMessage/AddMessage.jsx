import {Component} from 'react';
import './style.scss';

export default class AddMessage extends Component {
    state = {
        text: ''
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form className='message__form' onSubmit={this.onSubmit}>
                <input type='text'
                    className='message__form__input'
                    placeholder='Write a message...'
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button className='message__form__submit' type='submit'>
                    Add
                </button>
            </form>
        )
    }
}