import React from 'react';
import styles from './FixedHeader.module.css'

const FixedHeader = (props) => {
    return (
        <div className={styles.fixedHeader}>
                <div className={styles.t1}>
                    Услуги
                </div>
                <div className={styles.t2}>
                    Кейсы
                </div>
                <div className={styles.t3}>
                    Интеграции
                </div>
                <div className={styles.t4}>
                    Виджеты
                </div>
        </div>
    );
}

export default FixedHeader;