import React, { createContext, useContext, useState, useEffect } from 'react';

import { Meal as MealType } from '../types/meals';

type ContextProps = {
  isInShoppingList: (mealId: string) => boolean;
  addToShoppingList: (mealId: MealType) => void;
  removeFromShoppingList: (mealId: MealType) => void;
  toggleShoppingList: () => void;
  resetShoppingList: () => void;
  setSessionState: (shoppingListItems: MealType[]) => void;
  setShoppingListLength: React.Dispatch<React.SetStateAction<number>>;
  shoppingListLength: number;
  shoppingList: MealType[];
  shoppingListVisible: boolean;
  animate: boolean;
  setShoppingList: React.Dispatch<React.SetStateAction<MealType[]>>;
};

const Context = createContext<ContextProps>({} as ContextProps);

export const StateContext: React.FC<{}> = ({ children }) => {
  const [shoppingList, setShoppingList] = useState<MealType[]>([]);
  const [shoppingListLength, setShoppingListLength] = useState(0);
  const [shoppingListVisible, setShoppingListVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  const setSessionState = (shoppingListItems: MealType[]) => {
    setShoppingList(shoppingListItems);
    setShoppingListLength(shoppingListItems.length);
    setAnimate(!animate);
    sessionStorage.setItem('shoppingList', JSON.stringify({ shoppingListItems }));
    sessionStorage.setItem('shoppingListLength', JSON.stringify(shoppingListItems.length));
  };

  const resetShoppingList = () => {
    setShoppingList([]);
    setShoppingListLength(0);
    setShoppingListVisible(false);
    sessionStorage.setItem('shoppingList', JSON.stringify({}));
    sessionStorage.setItem('shoppingListLength', JSON.stringify('0'));
  };

  const toggleShoppingList = () => {
    setShoppingListVisible(!shoppingListVisible);
  };

  const addToShoppingList = (mealId: MealType) => {
    shoppingList.push(mealId);
    const shoppingListItems = shoppingList;
    setSessionState(shoppingListItems);
  };

  const removeFromShoppingList = (mealId: MealType) => {
    const shoppingListItems = shoppingList.filter((meal) => meal.slug !== mealId.slug);
    setSessionState(shoppingListItems);
  };

  const isInShoppingList = (mealId: string) => {
    return shoppingList.filter((e: { slug: string }) => e.slug === mealId).length > 0;
  };

  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem('shoppingList') || '{}');
    const sessionLength = JSON.parse(sessionStorage.getItem('shoppingListLength') || '0');
    sessionData.shoppingListItems !== undefined && setShoppingList(sessionData.shoppingListItems);
    sessionLength !== null && setShoppingListLength(sessionLength);
  }, []);

  return (
    <Context.Provider
      value={{
        removeFromShoppingList,
        resetShoppingList,
        toggleShoppingList,
        addToShoppingList,
        isInShoppingList,
        shoppingListLength,
        shoppingList,
        shoppingListVisible,
        animate,
        setSessionState,
        setShoppingList,
        setShoppingListLength,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
