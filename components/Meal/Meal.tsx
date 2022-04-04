import React from 'react'

import { Meal as MealType } from '../../types/meals'

import { SrOnly } from '../../components/SrOnly/SrOnly'

import styles from './Meal.module.scss'

export type MealProps = {
  meal: MealType;
  handleRemove: (mealId: MealType) => void;
  handleAdd: (mealId: MealType) => void;
  isInBasket: boolean;
};
  
export const Meal: React.FC<MealProps> = ({ meal, handleAdd, handleRemove, isInBasket }) => {
  return (
    <li className={styles.meal} key={`meal-${meal.id}`}>
      <div className={styles.meal__upper}>
        <a title={meal.name + ' details'} href={meal.url}>
          <h3 className={styles.meal__title}>{meal.name}</h3>
          <div className={styles['meal__img-container']}>
            <img className={styles.meal__img} src={meal.img ? meal.img : 'meal-placeholder.webp'} alt={meal.name} width="375" height="250" />
          </div>
        </a>
        <div className={styles.meal__actions}>
          {isInBasket ? (
            <button className={styles.meal__btn} onClick={() => handleRemove(meal)}>
              {'-'}
              <SrOnly>Add ingredients to basket</SrOnly></button>
          ) : (
            <button className={styles.meal__btn} onClick={() => handleAdd(meal)}>
            {'+'}
            <SrOnly>Add ingredients to basket</SrOnly></button>
          )}
        </div>
      </div>
      <ul>
        <li>Serves {meal.serves}</li>
        <li>{meal.time} mins</li>
      </ul>
    </li>
  );
};