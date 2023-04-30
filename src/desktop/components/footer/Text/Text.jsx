import React from 'react';
import styles from "./Text.module.css";

const Text = (props) => {
    return (
        <div>
            <div className={styles.t1}>
                Политика конфиденциальности
            </div>
            <div className={styles.t2}>
                ©WELBEX 2022. Все права защищены.
            </div>
            <div className={styles.t3}>
                Вакансии
            </div>
            <div className={styles.t4}>
                Сертификаты
            </div>
            <div className={styles.t5}>
                Благодарственные письма
            </div>
            <div className={styles.t6}>
                Кейсы
            </div>
            <div className={styles.t7}>
                Наши клиенты
            </div>
            <div className={styles.t8}>
                Интеграции
            </div>
            <div className={styles.t9}>
                Виджеты
            </div>
            <div className={styles.t10}>
                Вопрос / Ответ
            </div>
            <div className={styles.t11}>
                Услуги
            </div>
            <div className={styles.t12}>
                Блог на Youtube
            </div>
            <div className={styles.t13}>
                Расчёт стоимости
            </div>
            <div className={styles.t14}>
                Партнёрская программа
            </div>
            <div className={styles.t15}>
                Контакты
            </div>
            <div className={styles.t16}>
                Меню
            </div>
            <div className={styles.t17}>
                О компании
            </div>
            <div className={styles.t18}>
                +7 555 555-55-55
            </div>
            <div className={styles.t19}>
                Москва, Путевой проезд 3с1, к 902
            </div>
        </div>
    );
}

export default Text;