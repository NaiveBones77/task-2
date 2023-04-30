import React from 'react';
import logoImage from '../../../images/logo/logo_welbex.png'
import part1 from '../../../images/logo/part1.png'
import part2 from '../../../images/logo/part2.png'
import styles from './Logo.module.css'

const Logo = () => {
    return (
        <div className={styles.logo_welbex}>
            <img src={part1} className={styles.part1}/>
            <img src={part2} className={styles.part2}/>
        </div>
    );
}

export default Logo;