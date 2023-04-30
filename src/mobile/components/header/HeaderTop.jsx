import React from 'react';
import styles from './HeaderTop.module.css'
import Viber from "../../../common/Viber";
import Telegram from "../../../common/Telegram";
import Whatsapp from "../../../common/Whatsapp";


const HeaderTop = (props) => {
    return (
        <div className={styles.headerTop}>
            <Viber viber = {styles.viber} phone ={styles.phone}/>
            <Telegram telegram = {styles.telegram} Vector = {styles.Vector}/>
            <Whatsapp whatsapp = {styles.whatsapp} whatsappImg = {styles.whatsappImg}/>
        </div>
    );
}

export default HeaderTop;