import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";

const items = ['Написать новое приложение', 'Прописать Props', 'Сделать остальные дела'];
const App = () => (
    <div>
        <h1>Список дел:</h1>
        <InputItem />
        <ItemList items={ items }/>
        <Footer count={ items.length }/>
    </div>
);


export default App;