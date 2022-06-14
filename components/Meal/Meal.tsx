import React from 'react';

import { Meal as MealType } from '../../types/meals';

import { useStateContext } from '../../context/StateContext';
import { Grid } from '../Grid/Grid';
import { Ingredient } from '../Ingredient/Ingredient';
import { Tabs } from '../Tabs/Tabs';
import { Tab } from '../Tabs/Tab';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';

import styles from './Meal.module.scss';

type MealProps = {
  meal: MealType;
};

export const Meal: React.FC<MealProps> = ({ meal }) => {
  const { isInShoppingList, removeFromShoppingList, addToShoppingList } = useStateContext();
  const { url, name, time, serves, img, ingredients, method } = meal;

  return (
    <Grid>
      <Breadcrumb name={name} url={url} />
      <div className={styles.meal__grid}>
        <div className={styles.meal__summary}>
          <div className={styles.meal__text}>
            <h2 className={styles.meal__title}>{name}</h2>
            <ul className={styles['meal__info-list']}>
              <li className={styles.meal__info}>{time} minutes</li>
              {serves && <li className={styles.meal__info}>Serves {serves}</li>}
            </ul>
            <button
              data-test-id={isInShoppingList(url) ? 'remove-from-shopping-list' : 'add-to-shopping-list'}
              className={`${styles.meal__btn} ${isInShoppingList(url) ? styles['meal__btn--remove'] : ''}`}
              onClick={() => (isInShoppingList(url) ? removeFromShoppingList(meal) : addToShoppingList(meal))}
            >
              {isInShoppingList(url) ? '- Remove from shopping list' : '+ Add to shopping list'}
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
            <span className={styles.meal__type}>{meal.type}</span>
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
      </div>
    </Grid>
  );
};

export default Meal;
