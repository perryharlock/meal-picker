import React from 'react'
import { Meal as MealType } from '../../types/meals'

import { SrOnly } from '../../components/SrOnly/SrOnly'
import { Ingredient } from '../../components/Ingredient/Ingredient'
import { Clear, Close } from '../../components/Icons'

import styles from './Basket.module.scss'

export type BasketProps = {
  basket: Array<MealType>;
  resetBasket: () => void;
  toggleIngredientList: () => void;
};

export const Basket: React.FC<BasketProps> = ({ basket, toggleIngredientList, resetBasket }) => {
  return (
    <div className={styles.basket}>
      <div className={styles.basket__inner}>
        <div className={styles.basket__header}>
          <h4 className={styles.basket__title}>Your basket</h4>
          <div>
            <button title="Reset basket" className={`${styles.basket__btn} ${styles['basket__btn--reset']}`} onClick={resetBasket}>
              <Clear /><SrOnly>Reset basket</SrOnly></button>
            <button title="Close basket" className={styles.basket__btn} onClick={toggleIngredientList}>
              <Close /><SrOnly>Close Basket</SrOnly>
            </button>
          </div>
        </div>
        <div className={styles.basket__scrollable}>
          {basket.map((item) => (
            <>
              <p className={styles.basket__meal}>{item.name}</p>
              <ul className={styles.basket__list}>
                {item.ingredients.map((ingredient, idx) => (
                  <Ingredient key={`ingredient-${ingredient.name}`} ingredient={ingredient} />
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};