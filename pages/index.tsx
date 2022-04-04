import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import mealData from '../data/meals.json'
import { Meal as MealType } from '../types/meals'

import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { Meal } from '../components/Meal/Meal'
import { Footer } from '../components/Footer/Footer'
import { Basket } from '../components/Basket/Basket'

import styles from '../styles/Meals.module.scss'

const Meals: NextPage = () => {
  const [basket, setBasket] = useState<Array<MealType>>([])
  const [basketLength, setBasketLength] = useState(0)
  const [basketVisible, setBasketVisible] = useState(false)
  const [animate, setAnimate] = useState(false);

  const addToBasket = (mealId: MealType) => {
    basket.push(mealId)
    setBasket(basket)
    setBasketLength(basket.length)
    setAnimate(!animate)
    sessionStorage.setItem('basket', JSON.stringify({ basket }));
    sessionStorage.setItem('basketLength', JSON.stringify(basket.length));
  }

  const removeFromBasket = (mealId: MealType) => {
    const newBasket = basket.filter(meal => meal.id !== mealId.id)
    setBasket(newBasket)
    setBasketLength(newBasket.length)
    setAnimate(!animate)
    sessionStorage.setItem('basket', JSON.stringify({ newBasket }));
    sessionStorage.setItem('basketLength', JSON.stringify(newBasket.length));
  }

  const resetBasket = () => {
    setBasket([])
    setBasketLength(0)
    setBasketVisible(false)
    sessionStorage.setItem('basket', JSON.stringify({}));
    sessionStorage.setItem('basketLength', JSON.stringify('0'));
  }

  const toggleBasket = () => {
    setBasketVisible(!basketVisible)
  }

  const isInBasket = (mealId: string) => {
    return basket.filter((e: { id: string }) => e.id === mealId).length > 0
  }

  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem('basket') || '{}');
    const sessionLength = JSON.parse(sessionStorage.getItem('basketLength') || '0');
    sessionData.basket !== undefined && setBasket(sessionData.basket)
    sessionLength !== null && setBasketLength(sessionLength)
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
          <ul className={styles.meals__list}>
            {mealData.map((meal) => (
              <Meal
                key={meal.id}
                meal={meal}
                handleRemove={removeFromBasket}
                handleAdd={addToBasket}
                isInBasket={isInBasket(meal.id)}
              />
            ))}
          </ul>
        </Grid>
        {basketVisible ? (
          <Basket
            basket={basket}
            resetBasket={resetBasket}
            toggleBasket={toggleBasket}
          />
        ) : (
          ''
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Meals
