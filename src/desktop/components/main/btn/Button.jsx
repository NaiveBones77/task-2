import React from 'react';
import styles from './Button.module.css'

const Button = (props) =>{
    return (
        <button className={styles.btn}>
            <div className={styles.textBtn}>Получить консультацию</div>
        </button>
    );
}

export default Button;