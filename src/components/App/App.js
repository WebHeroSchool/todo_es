import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import styles from './App.module.css';

const App = () =>
    (<Router>
        <div className={styles.wrap}>
            <div className={styles.sidebar}>
                <NavLink to='/' exact
                      className={styles.link}
                      activeClassName={styles.link_active}>
                    <button className={styles.button}>Обо мне</button></NavLink>
                <NavLink to='/todo'
                      className={styles.link}
                      activeClassName={styles.link_active}>
                    <button className={styles.button}>Список дел</button></NavLink>
            </div>
            <div className={styles.element}>
                <Route path='/' exact component={About} />
                <Route path='/todo' component={Todo} />
            </div>
        </div>
    </Router>);

export default App;