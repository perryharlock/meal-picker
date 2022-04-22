import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import mealData from '../data/meals.json';
import { Meal as MealType } from '../types/meals';
import { useMediaQuery } from '../hooks/useMediaMatch';

import { Grid } from '../components/Grid/Grid';
import { Header } from '../components/Header/Header';
import { Meal } from '../components/Meal/Meal';
import { Footer } from '../components/Footer/Footer';
import { Basket } from '../components/Basket/Basket';
import { Search } from '../components/Search/Search';

import styles from '../styles/Meals.module.scss';

const Meals: NextPage = () => {
  const [basket, setBasket] = useState<MealType[]>([]);
  const [basketLength, setBasketLength] = useState(0);
  const [basketVisible, setBasketVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState(mealData);
  const [animate, setAnimate] = useState(false);
  const isMobile = useMediaQuery(767);
  const isTablet = useMediaQuery(991) && !isMobile;
  const isDesktop = useMediaQuery(992, 'min');

  const setSessionState = (basketItems: MealType[]) => {
    setBasket(basketItems);
    setBasketLength(basketItems.length);
    setAnimate(!animate);
    sessionStorage.setItem('basket', JSON.stringify({ basketItems }));
    sessionStorage.setItem('basketLength', JSON.stringify(basketItems.length));
  }

  const addToBasket = (mealId: MealType) => {
    basket.push(mealId);
    const basketItems = basket;
    setSessionState(basketItems);
  };

  const removeFromBasket = (mealId: MealType) => {
    const basketItems = basket.filter((meal) => meal.id !== mealId.id);
    setSessionState(basketItems);
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

  const isInBasket = (mealId: string) => {
    return basket.filter((e: { id: string }) => e.id === mealId).length > 0;
  };

  const searchMeals = (searchTerm: string) => {
    setMeals(mealData.filter((meal) => meal.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem('basket') || '{}');
    const sessionLength = JSON.parse(sessionStorage.getItem('basketLength') || '0');
    sessionData.basketItems !== undefined && setBasket(sessionData.basketItems);
    sessionLength !== null && setBasketLength(sessionLength);
  }, []);

  return (
    <div className={`${styles.meals} ${basketVisible ? styles['meals--no-scroll'] : ''}`}>
      <Head>
        <title>mealpicker</title>
        <meta name="description" content="Meal picker app" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header basketLength={basketLength} toggleBasket={toggleBasket} animate={animate} />

      <main className={styles.meals__main}>
        <Grid>
          <Search searchTerm={searchTerm} onChangeValue={searchMeals} />

          {meals.length ? (
            <ul className={styles.meals__list}>
              {meals.map((meal, index) => (
                <Meal
                  key={meal.id}
                  meal={meal}
                  handleRemove={removeFromBasket}
                  handleAdd={addToBasket}
                  isInBasket={isInBasket(meal.id)}
                  lazyLoad={index > (isDesktop ? 8 : isTablet ? 7 : 2)}
                />
              ))}
            </ul>
          ) : (
            <p>No meals match your search :-/</p>
          )}
        </Grid>
        {basketVisible ? <Basket basket={basket} resetBasket={resetBasket} toggleBasket={toggleBasket} /> : ''}
      </main>

      <Footer />
    </div>
  );
};

export default Meals;
