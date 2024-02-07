import React from 'react';
import Head from 'next/head';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { ShoppingList } from '../ShoppingList/ShoppingList';
import { useStateContext } from '../../context/StateContext';

import styles from './Layout.module.scss';

export const Layout: React.FC = ({ children }) => {
  const { shoppingListVisible, shoppingListLength, toggleShoppingList } =
    useStateContext();

  return (
    <div
      className={`${styles.layout} ${
        shoppingListVisible ? styles['layout--no-scroll'] : ''
      }`}
    >
      <Head>
        <title>mealpicker</title>
        <meta name="description" content="Meal picker app" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header
        shoppingListLength={shoppingListLength}
        toggleShoppingList={toggleShoppingList}
      />

      <main className={styles.layout__main}>{children}</main>

      <Footer />

      {shoppingListVisible ? <ShoppingList /> : ''}
    </div>
  );
};
