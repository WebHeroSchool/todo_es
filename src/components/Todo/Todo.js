import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import styles from './Todo.module.css';

const Todo  = () => {
    const initialState = {
        items: [
            {
                value: 'Написать новое приложение',
                isDone: true,
                id: 1
            },
            {
                value: 'Посмотреть видеоурок',
                isDone: true,
                id: 2
            },
            {
                value: 'Выпить кофе',
                isDone: false,
                id: 3
            }
        ],
        count: 3
    };

    const [items, setTodoItem] = useState(initialState.items);
    const [count, setCount] = useState(initialState.count);

    useEffect(() => {
        console.log("update");
    });
    useEffect(() => {
        console.log("mount");
    }, []);

    const onClickDone = id => {
        const newItemList = items.map(item => {
            const newItem = { ...item };

            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }

            return newItem;
        });
        setTodoItem(newItemList);
    };

    const onClickDelete = id => {
        const newItemList = items.filter(item => item.id !== id);
        setTodoItem(newItemList);
    };

    const onClickDeleteDone = () => {
        const newItemList = items.filter(item => item.isDone === false);
        setTodoItem(newItemList);
    };

    const onClickAdd = value => {
        const newItems = [
            ...items,
            {
                value,
                isDone: false,
                id: count + 1
            }
        ];
        setTodoItem(newItems);
        setCount ((count) => count + 1);
    }


        const allItems = items;
        const completedItems = items.filter(item => item.isDone === true);
        const uncompletedItems = items.filter(item => item.isDone === false);
        return (
            <div className={styles.wrap}>
                <h1>Список дел:</h1>
                <InputItem items={ items } onClickAdd={onClickAdd} />
                <ItemList items={ items } onClickDone={onClickDone} onClickDelete={onClickDelete} />
                <Footer count={ uncompletedItems.length } cauntAll={ allItems.length } countDone={ completedItems.length } onClickDeleteDone={onClickDeleteDone} />
            </div>);

}

export default Todo;