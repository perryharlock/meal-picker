import React from 'react';
import { Meal as MealType } from '../../types/meals';

import { SrOnly } from '../SrOnly/SrOnly';
import { Ingredient } from '../Ingredient/Ingredient';
import { Clear, Close } from '../Icons';

import styles from './ShoppingList.module.scss';

export type ShoppingListProps = {
  shoppingList: Array<MealType>;
  resetShoppingList: () => void;
  toggleShoppingList: () => void;
};

export const ShoppingList: React.FC<ShoppingListProps> = ({ shoppingList, toggleShoppingList, resetShoppingList }) => {
  return (
    <div className={styles.shopping}>
      <div className={styles.shopping__inner}>
        <div className={styles.shopping__header}>
          <h4 className={styles.shopping__title}>Your shopping list</h4>
          <div>
            <button
              title="Reset shopping list"
              className={`${styles.shopping__btn} ${styles['shopping__btn--reset']}`}
              onClick={resetShoppingList}
            >
              <Clear />
              <SrOnly>Reset shopping list</SrOnly>
            </button>
            <button title="Close shopping list" className={styles.shopping__btn} onClick={toggleShoppingList}>
              <Close />
              <SrOnly>Close shopping list</SrOnly>
            </button>
          </div>
        </div>
        <div className={styles.shopping__scrollable}>
          {shoppingList.map((item) => (
            <div key={item.url}>
              <p className={styles.shopping__meal}>{item.name}</p>
              <ul className={styles.shopping__list}>
                {item.ingredients.map((ingredient) => (
                  <Ingredient key={`ingredient-${ingredient.name}`} ingredient={ingredient} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
