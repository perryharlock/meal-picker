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
  const { url, img, name, type, time, serves } = meal;

  return (
    <li className={styles.meal} key={`meal-${url}`}>
      <Link href={isProd ? `/meal-picker${url}` : url}>
        <a className={styles.meal__link} title={name}>
          <div className={styles['meal__img-container']}>
            <img
              loading={lazyLoad ? 'lazy' : 'eager'}
              className={styles.meal__img}
              src={img ? img : 'meal-placeholder.webp'}
              alt={name}
              width="375"
              height="250"
            />
            <span className={styles.meal__type}>{type}</span>
          </div>
          <div className={styles.meal__lower}>
            <h2 className={styles.meal__title}>{name}</h2>
            <ul className={styles['meal__info-list']}>
              <li className={styles.meal__info}>{time} minutes</li>
              {serves && <li className={styles.meal__info}>Serves {serves}</li>}
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
