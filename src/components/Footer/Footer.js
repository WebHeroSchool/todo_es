import React from 'react';
import styles from './Footer.module.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const Footer = ({ count }) =>
    <div className={styles.wrap}>
        <Button>Осталось выполнить: {count}</Button>
        <div>
            <ButtonGroup variant="text">
                <Button>Всего</Button>
                <Button>Осталось</Button>
                <Button>Выполнено</Button>
            </ButtonGroup>
        </div>
        <Button>Удалить</Button>
    </div>;

export default Footer;