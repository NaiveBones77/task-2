import React from 'react';
import styles from './Footer.module.css'
import Viber from "../../../common/Viber";
import Telegram from "../../../common/Telegram";
import Whatsapp from "../../../common/Whatsapp";
import Text from "./Text/Text";

const Footer = (props) =>{
    return (
        <div className={styles.footer}>
            <Text/>
            <Viber viber = {styles.viber} phone ={styles.phone}/>
            <Telegram telegram = {styles.telegram} Vector = {styles.Vector}/>
            <Whatsapp whatsapp = {styles.whatsapp} whatsappImg = {styles.whatsappImg}/>
        </div>
    );
}

export default Footer;