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
import { Tabs } from '../components/Tabs/Tabs'
import { Tab } from '../components/Tabs/Tab'
import { Serves, Time } from '../components/Icons'

import styles from '../styles/Meal.module.scss'

const MealPage: NextPage<MealType> = ({ name, img, time, serves, ingredients, method }) => {
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

  const tabData = ["Ingredients", "Method"];

  return (
    <div className={`${styles.meal} ${basketVisible ? styles['meals--no-scroll'] : ''}`}>
      <Head>
        <title>mealpicker</title>
        <meta name="description" content="Meal picker app" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header basketLength={basketLength} toggleBasket={toggleBasket} animate={animate} />

      <main className={styles.meal__main}>
        <Grid>
          <div className={styles.meal__row}>
            <div className={styles.meal__column1}>
              <h2 className={styles.meals__title}>
                {name}
              </h2>
              <ul className={styles['meal__info-list']}>
                <li className={styles.meal__info}>
                  <span className={styles.meal__icon}>
                    <Serves />
                  </span>
                  {serves}
                </li>
                <li className={styles.meal__info}>
                  <span className={styles.meal__icon}><Time /></span>
                  {time} mins
                </li>
              </ul>
            </div>
            <div className={styles.meal__column2}>
              <img className={styles.meal__img} src={img ? img : 'meal-placeholder.webp'} alt={name} width="375" height="250" />
            </div>
          </div>
          <div className={styles.meal__ingredients}>
            <Tabs>
              <Tab title="Ingredients">
                <ul className={styles['meal__ingredients-list']}>
                  {ingredients.map((ingredient) => (
                    <Ingredient key={`ingredient-${ingredient.name}`} ingredient={ingredient} />
                  ))}
                </ul>
              </Tab>
              <Tab title="Method">
                {method ? (
                  <ol className={styles['meal__method-list']}>
                    {method.map((step, index) => (
                      <li className={styles['meal__method-item']}>
                        {step.desc}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p>No method availabe</p>
                )}
              </Tab>
            </Tabs>
          </div>
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
      method: meal.method || null,
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
