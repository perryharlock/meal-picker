import React from 'react'
import { Meal as MealType } from '../../types/meals'

import styles from './Basket.module.scss'

export type BasketProps = {
  ingredientListVisible: boolean;
  basketLength: number;
  basket: Array<MealType>;
  resetBasket: () => void;
  toggleIngredientList: () => void;
};

export const Basket: React.FC<BasketProps> = ({ ingredientListVisible, basketLength, basket, toggleIngredientList, resetBasket }) => {
  return (
    <div className={`${styles.basket} ${ingredientListVisible ? styles['basket--open'] : ''}`}>
      <div className={styles.basket__actions}>
        <button className={styles.basket__btn} onClick={resetBasket}>Reset</button>
        <button className={styles.basket__btn} onClick={toggleIngredientList}>
          {ingredientListVisible ? 'Close' : 'View'}
        </button>
      </div>
      {ingredientListVisible && (
        basket.map((item) => (
          <>
            <p>{item.name}</p>
            <ul>
              {item.ingredients.map((ingredient, idx) => (
                <li className={styles.basket__ingredient} key={item + '-' + idx}>
                  
                  <div>{ingredient.name}</div>
                  <div>
                    {ingredient.quantity}{ingredient.quantityType}
                  </div>
                </li>
              ))}
            </ul>
          </>
        ))
      )}
    </div>
  );
};