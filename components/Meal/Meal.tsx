import React from 'react';

import { Meal as MealType } from '../../types/meals';

import styles from './Meal.module.scss';

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
      <a
        className={styles.meal__link}
        title={meal.name}
        href={isProd ? `/meal-picker/${meal.url}` : meal.url}
      >
        <div className={styles['meal__img-container']}>
          <img
            loading={lazyLoad ? 'lazy' : 'eager'}
            className={styles.meal__img}
            src={meal.img ? meal.img : 'meal-placeholder.webp'}
            alt={meal.name}
            width="375"
            height="250"
          />
        </div>
        <div className={styles.meal__lower}>
          <h2 className={styles.meal__title}>
            {meal.name}
            {lazyLoad}
          </h2>
          <ul className={styles['meal__info-list']}>
            <li className={styles.meal__info}>
              {meal.time} minutes
            </li>
            <li className={styles.meal__info}>
              Serves {meal.serves}
            </li>
          </ul>
        </div>
      </a>
      {isInBasket ? (
        <button data-testid="remove-from-basket" className={styles.meal__btn} onClick={() => handleRemove(meal)}>
          - Remove ingredients from basket
        </button>
      ) : (
        <button data-testid="add-to-basket" className={styles.meal__btn} onClick={() => handleAdd(meal)}>
          + Add ingredients to basket
        </button>
      )}
    </li>
  );
};
