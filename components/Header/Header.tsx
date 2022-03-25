import React from 'react'

import { Grid } from '../Grid/Grid'

import styles from './Header.module.scss'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <Grid>
            <h1>Meal<span className={styles.header__highlight}>pick</span>er</h1>
        </Grid>
    </header>
  );
};