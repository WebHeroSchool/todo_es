import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddBox from '@material-ui/icons/AddBox';

const InputItem = () =>(<div className={styles.flex}>
        <TextField id="standard-basic" label="Добавь задание" fullWidth/>
        <label htmlFor="icon-button-file">
            <IconButton aria-label="upload picture" component="span">
                <AddBox />
            </IconButton>
        </label>
    </div>

);


export default InputItem;