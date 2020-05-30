import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';

const ItemList = ({ sort, sortValue, onClickDone, onClickDelete, onMarkImportant }) => (
    <>
        { sort.length === 0 ?
            <div className={styles.wrap}>
                <p className={styles.empty}> Список пуст </p>
            </div>:
        <ul className={styles.wrap}>
            {sort.map(item => <li className={styles.mark} key={item.value}>
                <Item
                    value={ item.value }
                    isDone={ item.isDone }
                    isImportant={ item.isImportant }
                    id={item.id}
                    onClickDone={onClickDone}
                    onMarkImportant={onMarkImportant}
                    onClickDelete={onClickDelete}
                />
            </li>)}
        </ul>
        }
    </>
)

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    onClickDone: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
};

export default ItemList;