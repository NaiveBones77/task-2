import React from 'react';
import styles from './Header.module.css'
import Menu from "./menu/Menu";
import Logo from "./logo/Logo";
import Viber from "../../../common/Viber";
import Telegram from "../../../common/Telegram";
import Whatsapp from "../../../common/Whatsapp";

const Header = (props) => {

    return (
        <div className={styles.header}>
            <Logo/>
            <Menu/>
            <div className={styles.t1}>
                крупный интегратор CRM в Росcии и ещё 8 странах
            </div>
            <text className={styles.phoneNumber}>
                +7 555 555-55-55
            </text>
            <Viber viber = {styles.viber} phone ={styles.phone}/>
            <Telegram telegram = {styles.telegram} Vector = {styles.Vector}/>
            <Whatsapp whatsapp = {styles.whatsapp} whatsappImg = {styles.whatsappImg}/>
        </div>
    );
}

export default Header;