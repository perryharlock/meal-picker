import React from 'react'

import { Grid } from '../Grid/Grid'

import styles from './Header.module.scss'

export type HeaderProps = {
  basketLength: number;
}

export const Header: React.FC<HeaderProps> = ({ basketLength }) => {
  return (
    <header className={styles.header}>
        <Grid className={styles.header__content}>
            <h1>meal<span className={styles.header__highlight}>pick</span>er</h1>
            {basketLength ? <span className={styles.header__badge}>{basketLength > 99 ? '9+' : basketLength}</span> : ''}
        </Grid>
    </header>
  );
};