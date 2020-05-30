import React from 'react';
import classnames from "classnames";
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import AddBox from '@material-ui/icons/AddBox';
import {grey} from "@material-ui/core/colors";

class InputItem extends React.Component{
    state= {
        inputValue: '',
        error: false,
        errorText: ""
    };

    onLabelChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();

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

    /*onSubmit = (event) => {
        event.preventDefault();
        this.props.onButtonClick(this.state.inputValue);
    };*/

    render () {
        const { error, errorText } = this.state;

        return (
            <div className={classnames({
                [styles.wrap]: true,
                [styles.error]: error,
            }) }>
                <form className={styles.inputAdd} onSubmit={this.onSubmit}>
                    <TextField
                        id="standard-basic"
                        label="Новое дело"
                        fullWidth
                        value={this.state.inputValue}
                        error={this.state.error}
                        onChange={this.onLabelChange}
                    />
                    <label
                        htmlFor="icon-button-file"
                        className={error ? styles.error : styles.add}
                    >
                        <button className={styles.button}>
                            <AddBox className={styles.addIcon} style={{ color: grey[700] }} aria-label="icon-button-file" />
                        </button>
                    </label>
                </form>
                <p className={styles.text}> {errorText}</p>
            </div>
        );
    }
}

InputItem.propTypes = {
    onClickAdd: PropTypes.func.isRequired,
   };

export default InputItem;