import React from 'react';
import Logo from '../Shared/Logo/Logo'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles['header']}>
            <ul >
                <Logo/>
                <li>Главная</li>
                <li>Категории</li>
                <li>Корзина</li>
                <li>Вход</li>
            </ul>
        </header>
    )
}
export default Header;