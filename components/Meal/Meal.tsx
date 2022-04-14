import React from 'react'

import { Meal as MealType } from '../../types/meals'

import { SrOnly } from '../../components/SrOnly/SrOnly'
import { Serves, Time } from '../../components/Icons'

import styles from './Meal.module.scss'

export type MealProps = {
  meal: MealType;
  handleRemove: (mealId: MealType) => void;
  handleAdd: (mealId: MealType) => void;
  isInBasket: boolean;
  lazyLoad: boolean;
};
  
export const Meal: React.FC<MealProps> = ({ meal, handleAdd, handleRemove, isInBasket, lazyLoad }) => {
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <li className={styles.meal} key={`meal-${meal.id}`}>
      <div className={styles.meal__upper}>
        <a className={styles.meal__link} title={meal.name + ' details'} href={isProd ? `/meal-picker/${meal.url}` : meal.url}>
          <h2 className={styles.meal__title}>{meal.name}{lazyLoad}</h2>
          <div className={styles['meal__img-container']}>
            <img loading={lazyLoad ? 'lazy' : 'eager'} className={styles.meal__img} src={meal.img ? meal.img : 'meal-placeholder.webp'} alt={meal.name} width="375" height="250" />
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
      <ul className={styles['meal__info-list']}>
        <li className={styles.meal__info}>
          <span className={styles.meal__icon}>
            <Serves />
          </span>
          {meal.serves}
        </li>
        <li className={styles.meal__info}>
          <span className={styles.meal__icon}><Time /></span>
          {meal.time} mins
        </li>
      </ul>
    </li>
  );
};