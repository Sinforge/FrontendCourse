import React from 'react';
import Categories from './Categories/Categories';
import styles from './MainScreen.module.css'

const MainScreen = () => {
        const categoryNames = ["Рогалики", "Шутеры", "ММО РПГ", "Пошаговые стратегии"]
        return (
            <Categories className={styles['main-screen']} listNames={categoryNames}/>
        )
}
export default MainScreen;