import React from 'react';

import { Meal as MealType } from '../../types/meals';

export type LayoutContextProps = {
  isInShoppingList: (mealId: string) => boolean;
  addToShoppingList: (mealId: MealType) => void;
  removeFromShoppingList: (mealId: MealType) => void;
};

export const LayoutContext = React.createContext<LayoutContextProps>({} as LayoutContextProps);
