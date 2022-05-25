import React from 'react';
import Link from 'next/link';

import { Meal as MealType } from '../../types/meals';

import styles from './Meal.module.scss';

export type MealCardProps = {
  meal: MealType;
  handleRemove: (mealId: MealType) => void;
  handleAdd: (mealId: MealType) => void;
  isInShoppingList: boolean;
  lazyLoad: boolean;
};

export const MealCard: React.FC<MealCardProps> = ({ meal, handleAdd, handleRemove, isInShoppingList, lazyLoad }) => {
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <li className={styles.meal} key={`meal-${meal.url}`}>
      <Link href={isProd ? `/meal-picker${meal.url}` : meal.url}>
        <a className={styles.meal__link} title={meal.name}>
          <div className={styles['meal__img-container']}>
            <img
              loading={lazyLoad ? 'lazy' : 'eager'}
              className={styles.meal__img}
              src={meal.img ? meal.img : 'meal-placeholder.webp'}
              alt={meal.name}
              width="375"
              height="250"
            />
            <span className={styles.meal__type}>{meal.type}</span>
          </div>
          <div className={styles.meal__lower}>
            <h2 className={styles.meal__title}>{meal.name}</h2>
            <ul className={styles['meal__info-list']}>
              <li className={styles.meal__info}>{meal.time} minutes</li>
              {meal.serves && <li className={styles.meal__info}>Serves {meal.serves}</li>}
            </ul>
          </div>
        </a>
      </Link>
      <button
        data-testid={isInShoppingList ? 'remove-from-shopping-list' : 'add-to-shopping-list'}
        className={`${styles.meal__btn} ${isInShoppingList ? styles['meal__btn--remove'] : ''}`}
        onClick={() => (isInShoppingList ? handleRemove(meal) : handleAdd(meal))}
      >
        {isInShoppingList ? '- Remove from shopping list' : '+ Add to shopping list'}
      </button>
    </li>
  );
};
