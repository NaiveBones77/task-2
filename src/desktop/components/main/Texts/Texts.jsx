import React from 'react';
import styles from './Texts.module.css'

const Texts = (props) =>{
    return (
        <div>
            <div className={styles.t1}>
                Развиваем и контролируем продажи за вас
            </div>
            <div className={styles.t2}>
                с{'\u00A0'}WELBEX
            </div>
            <div className={styles.t3}>
                Зарабатывайте<br/>больше
            </div>
            <div className={styles.t4}>
               Вместе с <span>БЕСПЛАТНОЙ</span> <span>КОНСУЛЬТАЦИЕЙ</span> мы дарим:
            </div>
            <div className={styles.t5}>
                отдела продаж <br/> и CRM системы
            </div>
            <div className={styles.t6}>
                Skype Аудит
            </div>
            <div className={styles.t7}>
                использования<br/>CRM
            </div>
            <div className={styles.t8}>
                35 дней
            </div>
            <div className={styles.t9}>
                с показателями
                вашего бизнеса
            </div>
            <div className={styles.t10}>
                Dashboard
            </div>
            <div className={styles.t11}>
                Виджеты
            </div>
            <div className={styles.t12}>
                30 готовых<br/>решений
            </div>
        </div>
    );
}

export default Texts;