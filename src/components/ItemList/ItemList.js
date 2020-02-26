import React from 'react';
import Item from '../Item/Item';


const ItemList = ({ items }) =>  (<ul>
    {items.map((items) => <li><Item item={ items } /></li>)}
    </ul>
);

export default ItemList;
