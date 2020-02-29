import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import styles from './App.module.css';

class App extends React.Component {
    render() {
        const items = [
            {
                value: 'Написать новое приложение',
                isDone: true
            },
            {
                value: 'Прописать props',
                isDone: true
            },
            {
                value: 'сделать остальные дела',
                isDone: false
            }
        ];
        return (
            <div className={styles.wrap}>
                <h1>Список дел:</h1>
                <InputItem />
                <ItemList items={ items } />
                <Footer count={ items.length }/>
            </div>);
    }
}

export default App;