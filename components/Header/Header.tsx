import React from 'react';
import Link from 'next/link';

import { Grid } from '../Grid/Grid';
import { ShoppingList } from '../Icons';
import { useStateContext } from '../../context/StateContext';

import styles from './Header.module.scss';

export type HeaderProps = {
  shoppingListLength: number;
  toggleShoppingList: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  shoppingListLength,
  toggleShoppingList,
}) => {
  const { animate } = useStateContext();

  return (
    <header className={styles.header}>
      <Grid className={styles.header__content}>
        <Link href="/">
          <a>
            <h1>
              meal<span className={styles.header__highlight}>pick</span>er
            </h1>
          </a>
        </Link>
        {shoppingListLength > 0 ? (
          <button
            onClick={toggleShoppingList}
            className={`${styles.header__shopping}
                ${styles[`header__shopping--${animate ? 'in' : 'out'}`]}`}
            data-testid="header-shopping-list"
          >
            <ShoppingList />
            <span className={styles.header__badge}>
              {shoppingListLength > 99 ? '9+' : shoppingListLength}
            </span>
          </button>
        ) : (
          ''
        )}
      </Grid>
    </header>
  );
};
