import React from 'react';
import Item from '../Item/Item';


const ItemList = ({ items }) => (items.map((items) => (
    <ul>
        <li><Item item={ items } /></li>
    </ul>
)));

export default ItemList;