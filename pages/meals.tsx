import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import mealData from '../data/meals.json'
import { Ingredient as IngredientType } from '../types/meals'

import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { Meal } from '../components/Meal/Meal'
import { Footer } from '../components/Footer/Footer'

import styles from '../styles/Meals.module.scss'

const Meals: NextPage = () => {
  const [basket, setBasket] = useState<Array<string>>([])
  const [basketLength, setBasketLength] = useState(0)
  const [selectedIngredients, setSelectedIngredients] = useState<IngredientType[]>([])

  const addToBasket = (mealId: string) => {
    basket.push(mealId)
    setBasket(basket)
    setBasketLength(basket.length)
    const selectedMeal = mealData.find((element) => element.id === mealId)
    selectedMeal !== undefined && setSelectedIngredients(selectedMeal.ingredients)
    // hmmmm
    // need to create an array which has an entry with an id, name, quantity and quantityType
  }

  const removeFromBasket = (mealId: string) => {
    const index = basket.indexOf(mealId);
    basket.splice(index, 1)
    setBasket(basket)
    setBasketLength(basket.length)
  }

  const resetBasket = () => {
    setBasket([])
    setBasketLength(0)
    setSelectedIngredients([])
  }

  return (
    <div className={styles.meals}>
      <Head>
        <title>Meal Picker</title>
        <meta name="description" content="Meal picker app" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header />

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
      </main>

      {basketLength ? (
        <div className={styles.meals__basket}>
          {basketLength} meal{basketLength !== 1 && 's'} added
          <ul className={styles['meals__basket-list']}>
            {selectedIngredients.map((item, idx) => (
              <li key={item.name + '-' + idx}>
                {item.name} - {item.quantity} {item.quantityType !== 'number' && item.quantityType}
              </li>
            ))}
          </ul>
          <button onClick={resetBasket}>Reset basket</button>
        </div>
      ) : ''}

      <Footer />
    </div>
  )
}

export default Meals
