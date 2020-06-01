import React from "react";
import styles from "./Created.module.css";
import logo from "../../img/logo-whs.png";

const Created = () => {
    return (
        <footer className={styles.created}>
            <p className={styles.created_txt}>РАЗРАБОТАНО В</p>
            <a href='https://webheroschool.ru/'
               target='_blank'
               rel='noopener noreferrer'>
                <img className={styles.created_img} src={logo} alt='logo'/>
            </a>
        </footer>
    );
};

export default Created;