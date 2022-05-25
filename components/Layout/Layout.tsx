import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import { Meal as MealType } from '../../types/meals';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { ShoppingList } from '../ShoppingList/ShoppingList';
import { LayoutContext } from './LayoutContext';

import styles from './Layout.module.scss';

export const Layout: React.FC = ({ children }) => {
  const [shoppingList, setShoppingList] = useState<MealType[]>([]);
  const [shoppingListLength, setShoppingListLength] = useState(0);
  const [shoppingListVisible, setShoppingListVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  const setSessionState = (shoppingListItems: MealType[]) => {
    setShoppingList(shoppingListItems);
    setShoppingListLength(shoppingListItems.length);
    setAnimate(!animate);
    sessionStorage.setItem('shoppingList', JSON.stringify({ shoppingListItems }));
    sessionStorage.setItem('shoppingListLength', JSON.stringify(shoppingListItems.length));
  };

  const resetShoppingList = () => {
    setShoppingList([]);
    setShoppingListLength(0);
    setShoppingListVisible(false);
    sessionStorage.setItem('shoppingList', JSON.stringify({}));
    sessionStorage.setItem('shoppingListLength', JSON.stringify('0'));
  };

  const toggleShoppingList = () => {
    setShoppingListVisible(!shoppingListVisible);
  };

  const addToShoppingList = (mealId: MealType) => {
    shoppingList.push(mealId);
    const shoppingListItems = shoppingList;
    setSessionState(shoppingListItems);
  };

  const removeFromShoppingList = (mealId: MealType) => {
    const shoppingListItems = shoppingList.filter((meal) => meal.url !== mealId.url);
    setSessionState(shoppingListItems);
  };

  const isInShoppingList = (mealId: string) => {
    return shoppingList.filter((e: { url: string }) => e.url === mealId).length > 0;
  };

  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem('shoppingList') || '{}');
    const sessionLength = JSON.parse(sessionStorage.getItem('shoppingListLength') || '0');
    sessionData.shoppingListItems !== undefined && setShoppingList(sessionData.shoppingListItems);
    sessionLength !== null && setShoppingListLength(sessionLength);
  }, []);

  return (
    <LayoutContext.Provider
      value={{
        isInShoppingList,
        addToShoppingList,
        removeFromShoppingList,
      }}
    >
      <div className={`${styles.layout} ${shoppingListVisible ? styles['layout--no-scroll'] : ''}`}>
        <Head>
          <title>mealpicker</title>
          <meta name="description" content="Meal picker app" />
          <link rel="icon" href="favicon.ico" />
        </Head>

        <Header shoppingListLength={shoppingListLength} toggleShoppingList={toggleShoppingList} animate={animate} />

        <main className={styles.layout__main}>{children}</main>

        <Footer />

        {shoppingListVisible ? (
          <ShoppingList
            shoppingList={shoppingList}
            resetShoppingList={resetShoppingList}
            toggleShoppingList={toggleShoppingList}
          />
        ) : (
          ''
        )}
      </div>
    </LayoutContext.Provider>
  );
};
