import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import styles from './App.module.css';

class App extends React.Component {
    state = {
        items: [
            {
                value: 'Написать новое приложение',
                isDone: true,
                id: 1
            },
            {
                value: 'Прописать props',
                isDone: true,
                id: 2
            },
            {
                value: 'сделать остальные дела',
                isDone: false,
                id: 3
            }
        ]
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

    render() {
        return (
            <div className={styles.wrap}>
                <h1>Список дел:</h1>
                <InputItem />
                <ItemList items={ this.state.items } onClickDone={this.onClickDone}/>
                <Footer count={ this.state.items.length }/>
            </div>);
    }
}

export default App;