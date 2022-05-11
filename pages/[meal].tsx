import React, { useState, useEffect } from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import * as fs from 'fs';
import * as path from 'path';

import slugify from 'slugify';

import { Meal as MealType } from '../types/meals';

import { Grid } from '../components/Grid/Grid';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Basket } from '../components/Basket/Basket';
import { Ingredient } from '../components/Ingredient/Ingredient';
import { Tabs } from '../components/Tabs/Tabs';
import { Tab } from '../components/Tabs/Tab';

import styles from '../styles/Meal.module.scss';

const MealPage: NextPage<MealType> = ({ url, name, img, time, serves, type, ingredients, method }) => {
  const [basket, setBasket] = useState<Array<MealType>>([]);
  const [basketLength, setBasketLength] = useState(0);
  const [basketVisible, setBasketVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  const mealObject: MealType = {
    url: url,
    name: name,
    img: img,
    time: time,
    serves: serves,
    type: type,
    ingredients: ingredients,
    method: method,
  };

  const setSessionState = (basketItems: MealType[]) => {
    setBasket(basketItems);
    setBasketLength(basketItems.length);
    setAnimate(!animate);
    sessionStorage.setItem('basket', JSON.stringify({ basketItems }));
    sessionStorage.setItem('basketLength', JSON.stringify(basketItems.length));
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

  const resetBasket = () => {
    setBasket([]);
    setBasketLength(0);
    setBasketVisible(false);
    sessionStorage.setItem('basket', JSON.stringify({}));
    sessionStorage.setItem('basketLength', JSON.stringify('0'));
  };

  const isInBasket = () => {
    return basket.filter((e: { url: string }) => e.url === url).length > 0;
  };

  const toggleBasket = () => {
    setBasketVisible(!basketVisible);
  };

  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem('basket') || '{}');
    const sessionLength = JSON.parse(sessionStorage.getItem('basketLength') || '0');
    sessionData.basketItems !== undefined && setBasket(sessionData.basketItems);
    sessionLength !== null && setBasketLength(sessionLength);
  }, []);

  const tabData = ['Ingredients', 'Method'];

  return (
    <div className={`${styles.meal} ${basketVisible ? styles['meals--no-scroll'] : ''}`}>
      <Head>
        <title>mealpicker</title>
        <meta name="description" content="Meal picker app" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header basketLength={basketLength} toggleBasket={toggleBasket} animate={animate} />

      <main className={styles.meal__main}>
        <Grid className={styles.meal__grid}>
          <div className={styles.meal__summary}>
            <div className={styles.meal__text}>
              <h2 className={styles.meal__title}>{name}</h2>
              <ul className={styles['meal__info-list']}>
                <li className={styles.meal__info}>{time} minutes</li>
                {serves && <li className={styles.meal__info}>Serves {serves}</li>}
              </ul>
              <button
                data-test-id={isInBasket() ? 'remove-from-basket' : 'add-to-basket'}
                className={`${styles.meal__btn} ${isInBasket() ? styles['meal__btn--remove'] : ''}`}
                onClick={() => (isInBasket() ? removeFromBasket(mealObject) : addToBasket(mealObject))}
              >
                {isInBasket() ? '- Remove ingredients from basket' : '+ Add ingredients to basket'}
              </button>
            </div>
            <div className={styles['meal__img-container']}>
              <img
                className={styles.meal__img}
                src={img ? img : 'meal-placeholder.webp'}
                alt={name}
                width="375"
                height="250"
              />
              <span className={styles.meal__type}>{type}</span>
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
                      <li key={`step-${index}`} className={styles['meal__method-item']}>
                        {step}
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
        {basketVisible ? <Basket basket={basket} resetBasket={resetBasket} toggleBasket={toggleBasket} /> : ''}
      </main>

      <Footer />
    </div>
  );
};

const getUrlDataFromFile = (url: string) => {
  const mealsDataFile = fs.readFileSync(path.resolve(process.cwd(), `data/pages/${url}.json`));
  return JSON.parse(mealsDataFile.toString());
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const meal = getUrlDataFromFile(String(params?.meal));

  return {
    props: {
      url: meal.url,
      name: meal.name,
      img: meal.img || null,
      time: meal.time,
      serves: meal.serves || null,
      type: meal.type,
      ingredients: meal.ingredients,
      method: meal.method || null,
    },
  };
};

const getPageFiles = () => {
  let fileList: string[] = [];
  fs.readdirSync(path.resolve(process.cwd(), 'data/pages/')).forEach((file) => {
    if (file.endsWith('.json')) {
      const url = file.slice(0, -5);
      fileList.push(url);
    }
  });
  return fileList;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any[] = getPageFiles().map((url) => ({
    params: { meal: slugify(url) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export { MealPage as default };
