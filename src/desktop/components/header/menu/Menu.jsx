import styles from "./Menu.module.css";

import React from 'react';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.m1}>
                Услуги
            </div>
            <div className={styles.m2}>
                Сертификаты
            </div>
            <div className={styles.m3}>
                Кейсы
            </div>
            <div className={styles.m4}>
                Интеграции
            </div>
            <div className={styles.m5}>
                Виджеты
            </div>
        </div>
    );
}

export default Menu;
