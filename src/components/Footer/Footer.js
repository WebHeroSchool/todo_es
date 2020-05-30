import React from 'react';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';
import classnames from "classnames";

const Footer = ({ onClickSort, sorting,count, cauntAll, countDone, onClickDeleteDone, onClickCommonInput }) => {

    return (
        <footer className={styles.wrap}>
            <button className={styles.button} onClick={() => onClickCommonInput()}>Выделить все</button>
            <div>
                <div>
                    <button
                        className={classnames({
                            [styles.button]: true,
                            [styles.selected]: sorting === 'Все'
                        })}
                        onClick={() => onClickSort('Все')}
                    >
                        Всего: {cauntAll}
                    </button>
                    <button
                        className={classnames({
                            [styles.button]: true,
                            [styles.selected]: sorting === 'Незавершенные'
                    })}
                        onClick={() => onClickSort('Незавершенные')}
                    >
                        Осталось: {count}
                    </button>
                    <button
                        className={classnames({
                            [styles.button]: true,
                            [styles.selected]: sorting === 'Завершенные'
                        })}
                        onClick={() => onClickSort('Завершенные')}
                    >
                        Выполнено: {countDone}
                    </button>
                </div>
            </div>
            <button className={styles.button} onClick={() => onClickDeleteDone()}>Удалить</button>
        </footer>
    );
};
Footer.propTypes = {
    count: PropTypes.number.isRequired
};

export default Footer;