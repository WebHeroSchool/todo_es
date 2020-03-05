import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<ul className={styles.wrap}>
    {items.map(item => <li className={styles.mark} key={item.value}>
        <Item
            value={ item.value }
            isDone={ item.isDone }
            id={item.id}
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
        />
    </li>)}
    </ul>);

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    onClickDone: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
};

export default ItemList;