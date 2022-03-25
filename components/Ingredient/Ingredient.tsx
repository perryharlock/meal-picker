import React from 'react'
import { Ingredient as IngredientType } from '../../types/meals'

import styles from './Ingredient.module.scss'

export type IngredientProps = {
  ingredient: IngredientType
};

export const Ingredient: React.FC<IngredientProps> = ({ ingredient }) => {
  return (
    <li className={styles.ingredient} key={`tag-${ingredient.name}`}>
      <div>{ingredient.name}</div>
      <div>
        {ingredient.quantity}{ingredient.quantityType !== 'g' ? ' ' : ''}{ingredient.quantityType}
      </div>
    </li>
  );
};