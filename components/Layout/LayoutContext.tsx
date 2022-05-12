import React from 'react';

import { Meal as MealType } from '../../types/meals';

export type LayoutContextProps = {
  isInBasket: (mealId: string) => boolean;
  addToBasket: (mealId: MealType) => void;
  removeFromBasket: (mealId: MealType) => void;
};

export const LayoutContext = React.createContext<LayoutContextProps>({} as LayoutContextProps);
