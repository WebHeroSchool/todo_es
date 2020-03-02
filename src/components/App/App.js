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
        ]
    };

    onClickDone = isDone => console.log(isDone);

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