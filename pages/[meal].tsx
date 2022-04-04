import React, { useState, useEffect } from 'react'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head'

import slugify from 'slugify';

import mealData from '../data/meals.json'

import { Meal as MealType } from '../types/meals'

import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Basket } from '../components/Basket/Basket'
import { Ingredient } from '../components/Ingredient/Ingredient'

import styles from '../styles/Meals.module.scss'

const MealPage: NextPage<MealType> = ({ name, img, time, serves, ingredients }) => {
  const [basket, setBasket] = useState<Array<MealType>>([])
  const [basketLength, setBasketLength] = useState(0)
  const [basketVisible, setBasketVisible] = useState(false)
  const [animate, setAnimate] = useState(false);

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
          <h2 className={styles.meals__title}>
            {name} {time} {serves}
          </h2>
          <img className={styles.meal__img} src={img ? img : 'meal-placeholder.webp'} alt={name} width="375" height="250" />
          <ul className={styles['meal__ingredients-list']}>
            {ingredients.map((ingredient) => (
              <Ingredient key={`ingredient-${ingredient.name}`} ingredient={ingredient} />
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


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const meal = mealData.find((meal) => slugify(meal.url) === params?.meal);

  if (!meal) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      name: meal.name,
      img: meal.img,
      time: meal.time,
      serves: meal.serves,
      ingredients: meal.ingredients,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any[] = mealData.map((meal) => ({
    params: { meal: slugify(meal.url) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export { MealPage as default };
