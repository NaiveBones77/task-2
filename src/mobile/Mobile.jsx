import React from 'react';
import FixedHeader from "./components/fixHeader/FixedHeader";
import HeaderTop from "./components/header/HeaderTop";
import MainMobile from "./components/main/MainMobile";
import FooterMobile from "./components/footer/FooterMobile";
import styles from './Mobile.module.css'

const Mobile = (props) => {
    return (
        <div className = {styles.mobile}>
            <FixedHeader/>
            <HeaderTop/>
            <MainMobile/>
            <FooterMobile/>
        </div>
    );
}

export default Mobile;