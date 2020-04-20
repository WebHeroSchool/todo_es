import React from 'react';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const Footer = ({ count, cauntAll, countDone, onClickDeleteDone }) =>
    <footer className={styles.wrap}>
        <div>
            <ButtonGroup variant="text">
                <Button>Всего: { cauntAll }</Button>
                <Button>Осталось: { count }</Button>
                <Button>Выполнено: { countDone }</Button>
            </ButtonGroup>
        </div>
        <Button onClick={() => onClickDeleteDone()}>Удалить</Button>
    </footer>;

Footer.propTypes = {
    count: PropTypes.number.isRequired
};

export default Footer;