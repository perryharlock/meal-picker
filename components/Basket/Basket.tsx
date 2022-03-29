import React from 'react'
import { Meal as MealType } from '../../types/meals'

import { SrOnly } from '../../components/SrOnly/SrOnly'
import { Ingredient } from '../../components/Ingredient/Ingredient'

import styles from './Basket.module.scss'

export type BasketProps = {
  ingredientListVisible: boolean;
  basket: Array<MealType>;
  resetBasket: () => void;
  toggleIngredientList: () => void;
};

export const Basket: React.FC<BasketProps> = ({ ingredientListVisible, basket, toggleIngredientList, resetBasket }) => {
  return (
    <div className={`${styles.basket} ${ingredientListVisible ? styles['basket--open'] : ''}`}>
      <div className={styles.basket__actions}>
        <button className={styles.basket__btn} onClick={resetBasket}>Reset<SrOnly> Selected Meals</SrOnly></button>
        <button className={styles.basket__btn} onClick={toggleIngredientList}>
          {ingredientListVisible ? 'Close' : 'View'}<SrOnly> Selected Meals</SrOnly>
        </button>
      </div>
      {ingredientListVisible && (
        <>
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
        </>
      )}
    </div>
  );
};