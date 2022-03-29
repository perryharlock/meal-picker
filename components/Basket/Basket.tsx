import React from 'react'
import { Meal as MealType } from '../../types/meals'

import { SrOnly } from '../../components/SrOnly/SrOnly'
import { Ingredient } from '../../components/Ingredient/Ingredient'

import styles from './Basket.module.scss'

export type BasketProps = {
  basket: Array<MealType>;
  resetBasket: () => void;
  toggleIngredientList: () => void;
};

export const Basket: React.FC<BasketProps> = ({ basket, toggleIngredientList, resetBasket }) => {
  return (
    <div className={styles.basket}>
      <div className={styles.basket__actions}>
        <button className={styles.basket__btn} onClick={resetBasket}>Reset<SrOnly> basket</SrOnly></button>
        <button className={styles.basket__btn} onClick={toggleIngredientList}>
          Close<SrOnly> Basket</SrOnly>
        </button>
      </div>
      <h4 className={styles.basket__title}>Shopping list</h4>
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
  );
};