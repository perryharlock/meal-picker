import React, { useContext } from 'react';

import { Meal as MealType } from '../../types/meals';

import { LayoutContext } from '../Layout/LayoutContext';
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
  const { isInShoppingList, removeFromShoppingList, addToShoppingList } = useContext(LayoutContext);

  return (
    <Grid>
      <Breadcrumb name={meal.name} url={meal.url} />
      <div className={styles.meal__grid}>
        <div className={styles.meal__summary}>
          <div className={styles.meal__text}>
            <h2 className={styles.meal__title}>{meal.name}</h2>
            <ul className={styles['meal__info-list']}>
              <li className={styles.meal__info}>{meal.time} minutes</li>
              {meal.serves && <li className={styles.meal__info}>Serves {meal.serves}</li>}
            </ul>
            <button
              data-test-id={isInShoppingList(meal.url) ? 'remove-from-shopping-list' : 'add-to-shopping-list'}
              className={`${styles.meal__btn} ${isInShoppingList(meal.url) ? styles['meal__btn--remove'] : ''}`}
              onClick={() => (isInShoppingList(meal.url) ? removeFromShoppingList(meal) : addToShoppingList(meal))}
            >
              {isInShoppingList(meal.url) ? '- Remove from shopping list' : '+ Add to shopping list'}
            </button>
          </div>
          <div className={styles['meal__img-container']}>
            <img
              className={styles.meal__img}
              src={meal.img ? meal.img : 'meal-placeholder.webp'}
              alt={meal.name}
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
                {meal.ingredients.map((ingredient) => (
                  <Ingredient key={`ingredient-${ingredient.name}`} ingredient={ingredient} />
                ))}
              </ul>
            </Tab>
            <Tab title="Method">
              {meal.method ? (
                <ol className={styles['meal__method-list']}>
                  {meal.method.map((step, index) => (
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
