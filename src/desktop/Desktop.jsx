import React from "react";
import styles from './Desktop.module.css'
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const Desktop = (props) => {
    return (
        <div className = {styles.desktop}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default Desktop;