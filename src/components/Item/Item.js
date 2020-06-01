import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import Important from '@material-ui/icons/NewReleases';
import {grey} from "@material-ui/core/colors";


class Item extends React.Component {

    render() {
        const { value, isDone, isImportant, onClickDone, onClickDelete, onMarkImportant, id, provided, innerRef } = this.props;
        return (<div className={styles.line}
                     ref={innerRef}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
            >
                    <div className={styles.task} onClick={() => onClickDone(id)}>
                        <Checkbox
                            style={{ color: grey[700], backgroundColor: 'transparent' }}

                            checked={isDone}
                            color="default"
                            value="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                        <label className={
                            classnames ({
                                [styles.item]: true,
                                [styles.done]: isDone,
                                [styles.important]: isImportant
                            })
                        }>
                            { value }
                        </label>
                    </div>
                    <div className={styles.icons}>
                        <Important className={ classnames({[styles.importantIcon]: true, [styles.important]: isImportant }) }
                                   onClick={() => onMarkImportant(id)} />
                        <DeleteIcon style={{ color: grey[700] }} aria-label="delete" onClick={() => onClickDelete(id)} />
                    </div>
            </div>
        )
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