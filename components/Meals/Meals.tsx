import React, { useState } from 'react';

import { useMediaQuery } from '../../hooks/useMediaMatch';

import { Meal as MealType } from '../../types/meals';

import { useStateContext } from '../../context/StateContext';
import { Search } from '../Search/Search';
import { MealCard } from '../MealCard/MealCard';
import { Grid } from '../Grid/Grid';

import styles from './Meals.module.scss';

type MealsProps = {
  mealData: MealType[];
};

export const Meals: React.FC<MealsProps> = ({ mealData }) => {
  const { isInShoppingList, removeFromShoppingList, addToShoppingList } = useStateContext();
  const [meals, setMeals] = useState<Array<MealType>>(mealData);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('');
  const isMobile = useMediaQuery(767);
  const isTablet = useMediaQuery(991) && !isMobile;
  const isDesktop = useMediaQuery(992, 'min');

  const searchMeals = (searchTerm: string, searchType: string) => {
    setMeals(
      mealData.filter(
        (meal) =>
          meal.type.toLowerCase().indexOf(searchType.toLowerCase()) !== -1 &&
          meal.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1,
      ),
    );
    setSearchTerm(searchTerm);
    setSearchType(searchType);
  };

  return (
    <Grid>
      <Search searchTerm={searchTerm} onChangeValue={searchMeals} searchType={searchType} />

      {meals.length ? (
        <ul className={styles.meals__list}>
          {meals.map((meal: any, index: number) => (
            <MealCard
              key={meal.url}
              meal={meal}
              isInShoppingList={isInShoppingList(meal.url)}
              handleRemove={removeFromShoppingList}
              handleAdd={addToShoppingList}
              lazyLoad={index > (isDesktop ? 8 : isTablet ? 7 : 2)}
            />
          ))}
        </ul>
      ) : (
        <p>No matches for your search :-/</p>
      )}
    </Grid>
  );
};

export default Meals;
