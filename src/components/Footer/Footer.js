import React from 'react';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';
import classnames from "classnames";

const Footer = ({ onClickSort, sorting,count, cauntAll, countDone, onClickDeleteDone, onClickCommonInput }) => {

    return (
        <div className={styles.wrap}>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={() => onClickCommonInput()}>Выделить все</button>
                <button className={styles.button} onClick={() => onClickDeleteDone()}>Удалить</button>
            </div>
            <div className={styles.buttonGroup_wrap}>
                <button
                    className={classnames({
                        [styles.button]: true,
                        [styles.buttonGroup]: true,
                        [styles.selected]: sorting === 'Всего'
                    })}
                    onClick={() => onClickSort('Всего')}
                >
                    Всего: {cauntAll}
                </button>
                <button
                    className={classnames({
                        [styles.button]: true,
                        [styles.buttonGroup]: true,
                        [styles.selected]: sorting === 'Осталось'
                    })}
                    onClick={() => onClickSort('Осталось')}
                >
                    Осталось: {count}
                </button>
                <button
                    className={classnames({
                        [styles.button]: true,
                        [styles.selected]: sorting === 'Выполнено'
                    })}
                    onClick={() => onClickSort('Выполнено')}
                >
                    Выполнено: {countDone}
                </button>
            </div>
        </div>
    );
};

Footer.propTypes = {
    count: PropTypes.number.isRequired
};

export default Footer;