import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import styles from './Todo.module.css';

class Todo extends React.Component {
    state = {
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

    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = { ...item };

            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }

            return newItem;
        });
        this.setState({ items: newItemList });
    };

    onClickDelete = id => {
        const newItemList = this.state.items.filter(item => item.id !== id);
        this.setState({ items: newItemList });
    };

    onClickDeleteDone = () => {
        const newItemList = this.state.items.filter(item => item.isDone === false);
        this.setState({ items: newItemList });
    };

    onClickAdd = value => this.setState(state => ({
        items: [
            ...state.items,
            {
                value,
                isDone: false,
                id: state.count + 1
            }
        ],
        count: state.count + 1
    }));

    render() {
        const allItems = this.state.items;
        const completedItems = this.state.items.filter(item => item.isDone === true);
        const uncompletedItems = this.state.items.filter(item => item.isDone === false);
        return (
            <div className={styles.wrap}>
                <h1>Список дел:</h1>
                <InputItem items={ this.state.items } onClickAdd={this.onClickAdd} />
                <ItemList items={ this.state.items } onClickDone={this.onClickDone} onClickDelete={this.onClickDelete} />
                <Footer count={ uncompletedItems.length } cauntAll={ allItems.length } countDone={ completedItems.length } onClickDeleteDone={this.onClickDeleteDone} />
            </div>);
    }
}

export default Todo;