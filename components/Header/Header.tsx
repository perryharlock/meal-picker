import React, { useState } from 'react'

import { Grid } from '../Grid/Grid'
import { Basket } from '../Icons'

import styles from './Header.module.scss'

export type HeaderProps = {
  basketLength: number;
  toggleIngredientList: () => void;
  animate: boolean;
}

export const Header: React.FC<HeaderProps> = ({ basketLength, toggleIngredientList, animate }) => {

  return (
    <header className={styles.header}>
        <Grid className={styles.header__content}>
            <h1>meal<span className={styles.header__highlight}>pick</span>er</h1>
            {basketLength ? (
              <button onClick={toggleIngredientList} className={`${styles.header__basket} ${styles[`header__basket--${animate ? 'in' : 'out'}`]}`}>
                <Basket />
                <span className={styles.header__badge}>
                  {basketLength > 99 ? '9+' : basketLength}
                </span>
              </button>
            ) : ''}
        </Grid>
    </header>
  );
};