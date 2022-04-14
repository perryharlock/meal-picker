import React from 'react';

import { Grid } from '../Grid/Grid';
import { Basket } from '../Icons';

import styles from './Header.module.scss';

export type HeaderProps = {
  basketLength: number;
  toggleBasket: () => void;
  animate: boolean;
};

export const Header: React.FC<HeaderProps> = ({ basketLength, toggleBasket, animate }) => {
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <header className={styles.header}>
      <Grid className={styles.header__content}>
        <a href={isProd ? '/meal-picker' : '/'}>
          <h1>
            meal<span className={styles.header__highlight}>pick</span>er
          </h1>
        </a>
        {basketLength > 0 ? (
          <button
            onClick={toggleBasket}
            className={`${styles.header__basket}
                ${styles[`header__basket--${animate ? 'in' : 'out'}`]}`}
            data-testid="header-basket"
          >
            <Basket />
            <span className={styles.header__badge}>{basketLength > 99 ? '9+' : basketLength}</span>
          </button>
        ) : (
          ''
        )}
      </Grid>
    </header>
  );
};
