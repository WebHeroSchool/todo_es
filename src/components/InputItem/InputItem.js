import React from 'react';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddBox from '@material-ui/icons/AddBox';


class InputItem extends React.Component {
    state= {
        inputValue: '',
        inputError: false
    };

    onButtonClick = () => {
        if (this.state.inputValue !== '') {
            this.setState({
                inputValue: ''
            });
            this.props.onClickAdd(this.state.inputValue);
        }
        else {
            this.setState ({
                inputError: true
            });
        }
        };

    render () {

        return (<div className={styles.flex}>
                <TextField
                    id="standard-basic"
                    label="Добавь задание"
                    fullWidth
                    value={this.state.inputValue}
                    error={this.state.inputError}
                    onChange={event => this.setState({
                        inputValue: event.target.value.toUpperCase(),
                        inputError: false
                    })}
                />
                <label
                    htmlFor="icon-button-file"
                    onClick={this.onButtonClick}
                >
                    <IconButton
                        aria-label="upload picture"
                        component="span"
                    >
                        <AddBox />
                    </IconButton>
                </label>
                            </div>
        );
    }
}

InputItem.propTypes = {
    onClickAdd: PropTypes.func.isRequired,
   };

export default InputItem;