import React from 'react';

import { Meal as MealType } from '../../types/meals';

export type LayoutContextProps = {
  isInBasket: (mealId: string) => boolean;
  toggleBasket: () => void;
  addToBasket: (mealId: MealType) => void;
  resetBasket: () => void;
  removeFromBasket: (mealId: MealType) => void;
};

export const LayoutContext = React.createContext<LayoutContextProps>({} as LayoutContextProps);
