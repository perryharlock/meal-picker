import React from 'react'
import { Meal as MealType } from '../../types/meals'

import { SrOnly } from '../../components/SrOnly/SrOnly'

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