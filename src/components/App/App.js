import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import './App.css';

const App = () => {
    const items = [
        {
            value: 'Написать новое приложение'
        },
        {
            value: 'Прописать props'
        },
        {
            value: 'сделать остальные дела'
        }
    ];
    return (
    <div className="wrap">
        <h1 className="wrap__title">Список дел:</h1>
        <InputItem/>
        <ItemList items={ items } />
        <Footer count={ items.length }/>
    </div>);
}

export default App;