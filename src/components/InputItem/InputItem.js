import React from 'react';
import classnames from "classnames";
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddBox from '@material-ui/icons/AddBox';

class InputItem extends React.Component{
    state= {
        inputValue: '',
        error: false,
        errorText: ""
    };

    onButtonClick = () => {

        const {onClickAdd, items} = this.props;
        let error = false;
        items.forEach(item=>{
            if(item.value === this.state.inputValue){
                error = true
            }
        });
        if(this.state.inputValue==="" || error){
            this.setState({
                error: true,
                errorText: error ? "Это дело есть в списке": "Поле не должно быть пустым"
            });
        }else{
            this.setState({
                inputValue: '',
                error: false
            });
            onClickAdd(this.state.inputValue)
        }
    };

    render () {
        const { error, errorText } = this.state;

        return (

            <div className={classnames({
                [styles.wrap]: true,
                [styles.error]: error,
            }) }>
                <div className={styles.inputAdd}>
                <TextField
                    id="standard-basic"
                    label="Добавь задание"
                    fullWidth
                    value={this.state.inputValue}
                    error={this.state.error}
                    onChange={event => this.setState({
                        inputValue: event.target.value,
                        error: false
                    })}
                />
                <label
                    htmlFor="icon-button-file"
                    className={error ? styles.error : ""}
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
                <p className={styles.text}> {errorText}</p>
        </div>
        );
    }
}

InputItem.propTypes = {
    onClickAdd: PropTypes.func.isRequired,
   };

export default InputItem;