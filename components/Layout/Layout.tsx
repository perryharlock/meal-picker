import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import { Meal as MealType } from '../../types/meals';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Basket } from '../Basket/Basket';
import { LayoutContext } from './LayoutContext';

import styles from './Layout.module.scss';

export const Layout: React.FC = ({ children }) => {
  const [basket, setBasket] = useState<MealType[]>([]);
  const [basketLength, setBasketLength] = useState(0);
  const [basketVisible, setBasketVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  const setSessionState = (basketItems: MealType[]) => {
    setBasket(basketItems);
    setBasketLength(basketItems.length);
    setAnimate(!animate);
    sessionStorage.setItem('basket', JSON.stringify({ basketItems }));
    sessionStorage.setItem('basketLength', JSON.stringify(basketItems.length));
  };

  const resetBasket = () => {
    setBasket([]);
    setBasketLength(0);
    setBasketVisible(false);
    sessionStorage.setItem('basket', JSON.stringify({}));
    sessionStorage.setItem('basketLength', JSON.stringify('0'));
  };

  const toggleBasket = () => {
    setBasketVisible(!basketVisible);
  };

  const addToBasket = (mealId: MealType) => {
    basket.push(mealId);
    const basketItems = basket;
    setSessionState(basketItems);
  };

  const removeFromBasket = (mealId: MealType) => {
    const basketItems = basket.filter((meal) => meal.url !== mealId.url);
    setSessionState(basketItems);
  };

  const isInBasket = (mealId: string) => {
    return basket.filter((e: { url: string }) => e.url === mealId).length > 0;
  };

  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem('basket') || '{}');
    const sessionLength = JSON.parse(sessionStorage.getItem('basketLength') || '0');
    sessionData.basketItems !== undefined && setBasket(sessionData.basketItems);
    sessionLength !== null && setBasketLength(sessionLength);
  }, []);

  return (
    <LayoutContext.Provider
      value={{
        isInBasket,
        addToBasket,
        removeFromBasket,
      }}
    >
      <div className={`${styles.layout} ${basketVisible ? styles['layout--no-scroll'] : ''}`}>
        <Head>
          <title>mealpicker</title>
          <meta name="description" content="Meal picker app" />
          <link rel="icon" href="favicon.ico" />
        </Head>

        <Header basketLength={basketLength} toggleBasket={toggleBasket} animate={animate} />

        <main className={styles.layout__main}>{children}</main>

        <Footer />

        {basketVisible ? <Basket basket={basket} resetBasket={resetBasket} toggleBasket={toggleBasket} /> : ''}
      </div>
    </LayoutContext.Provider>
  );
};
