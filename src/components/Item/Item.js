import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

class Item extends React.Component {
    componentDidMount() {
        this.timerId = setInterval(() => console.log('interval'), 1000);
    };
    componentWillUnmount() {
        clearInterval(this.timerId);
    };

    render() {
        const { value, isDone, onClickDone, onClickDelete, id } = this.props;
        return (<div className={styles.flex}>
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
    }
}

Item.defaultProps = {
    value: 'Задача не найдена',
    isDone: false
};

Item.propTypes = {
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    onClickDone: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};

export default Item;