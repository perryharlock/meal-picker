import React, { useState } from 'react'
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
  const [ingredientListVisible, setIngredientListVisible] = useState(false)
  const [animate, setAnimate] = useState(false);

  const addToBasket = (mealId: MealType) => {
    basket.push(mealId)
    setBasket(basket)
    setBasketLength(basket.length)
    setAnimate(!animate)
  }

  const removeFromBasket = (mealId: MealType) => {
    const index = basket.indexOf(mealId);
    basket.splice(index, 1)
    setBasket(basket)
    setBasketLength(basket.length)
    setAnimate(!animate)
  }

  const resetBasket = () => {
    setBasket([])
    setBasketLength(0)
    setIngredientListVisible(false)
  }

  const toggleIngredientList = () => {
    setIngredientListVisible(!ingredientListVisible)
  }

  return (
    <div className={styles.meals}>
      <Head>
        <title>mealpicker</title>
        <meta name="description" content="Meal picker app" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header basketLength={basketLength} toggleIngredientList={toggleIngredientList} animate={animate} />

      <main className={styles.meals__main}>
        <Grid>
          <h2 className={styles.meals__title}>
            Pick your meals and get an instant shopping list!
          </h2>

          <ul className={styles.meals__list}>
            {mealData.map((meal) => (
              <Meal
                basketLength={basketLength}
                key={meal.id} meal={meal}
                handleRemove={removeFromBasket}
                handleAdd={addToBasket}
              />
            ))}
          </ul>
        </Grid>
        {ingredientListVisible ? (
          <Basket
            basket={basket}
            resetBasket={resetBasket}
            toggleIngredientList={toggleIngredientList}
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
