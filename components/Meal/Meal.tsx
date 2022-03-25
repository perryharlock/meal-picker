import React, { useState, useEffect } from 'react'

import { Ingredient } from '../../components/Ingredient/Ingredient'
import { Tag } from '../../components/Tag/Tag'
import { Meal as MealType } from '../../types/meals'

import styles from './Meal.module.scss'

export type MealProps = {
  meal: MealType;
  handleRemove: (mealId: MealType) => void;
  handleAdd: (mealId: MealType) => void;
  basketLength: number;
};
  
export const Meal: React.FC<MealProps> = ({ meal, handleAdd, handleRemove, basketLength }) => {
  const [showRemove, setShowRemove] = useState(false);
  const [showAdd, setShowAdd] = useState(true);

  const removeItem = () => {
    setShowRemove(false)
    setShowAdd(true)
    handleRemove(meal)
  }

  const addItem = () => {
    setShowAdd(false)
    setShowRemove(true)
    handleAdd(meal)
  }

  useEffect(() => {
    basketLength === 0 && (
      setShowAdd(true),
      setShowRemove(false)
    )
  });

  return (
    <li className={styles.meal} key={`meal-${meal.id}`}>
      <h3 className={styles.meal__title}>{meal.name}</h3>
      <div className={styles.meal__upper}>
        <ul className={styles.meal__tags}>
          {meal.tags.map((tag) => (
            <Tag key={`tag-${tag.item}`} tag={tag.item} />
          ))}
        </ul>
        <img className={styles.meal__img} src={meal.img} alt={meal.name} width="375" height="250" />
        <div className={styles.meal__actions}>
          {showAdd === true && <button className={styles.meal__btn} onClick={addItem}>+</button>}
          {showRemove && <button className={styles.meal__btn} onClick={removeItem}>-</button>}
        </div>
      </div>
      <details className={styles.meal__ingredients}>
        <summary className={styles['meal__ingredients-title']}>Ingredients</summary>
        <ul className={styles['meal__ingredients-list']}>
          {meal.ingredients.map((ingredient) => (
            <Ingredient key={`ingredient-${ingredient.name}`} ingredient={ingredient} />
          ))}
        </ul>
      </details>
    </li>
  );
};