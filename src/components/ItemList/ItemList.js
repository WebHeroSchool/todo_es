import React from 'react';
import Item from '../Item/Item';
import { items } from '../App/App';

const ItemList = () => (items.map((items) => (
    <ul>
        <li><Item item={ items } /></li>
    </ul>
)));

export default ItemList;