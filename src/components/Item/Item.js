import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Item = ({ value, isDone, onClickDone, onClickDelete, id }) => (<div className={styles.flex}>
    <div onClick={() => onClickDone(id)}>
        <Checkbox
            checked={isDone}
            color="default"
            value="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
        <label className={
            classnames ({
                [styles.item]: true,
                [styles.done]: isDone
            })
        }>
            { value }
        </label>
    </div>
    <div>
    <IconButton aria-label="delete" onClick={() => onClickDelete(id)}>
    <DeleteIcon  />
    </IconButton>
</div>
</div>);

Item.defaultProps = {
    value: 'Задача не найдена',
    isDone: false
};


export default Item;