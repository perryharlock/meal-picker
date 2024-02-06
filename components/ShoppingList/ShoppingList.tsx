import React from 'react';
import { SrOnly } from '../SrOnly/SrOnly';
import { Ingredient } from '../Ingredient/Ingredient';
import { Clear, Close } from '../Icons';
import { useStateContext } from '../../context/StateContext';

import styles from './ShoppingList.module.scss';

export const ShoppingList = () => {
  const { shoppingList, resetShoppingList, toggleShoppingList, removeFromShoppingList } = useStateContext();
  return (
    <div className={styles.shopping}>
      <div className={styles.shopping__inner}>
        <div className={styles.shopping__header}>
          <h4 className={styles.shopping__title}>Your shopping list</h4>
          <div>
            {shoppingList.length > 0 && (
              <button
                title="Reset shopping list"
                className={`${styles.shopping__btn} ${styles['shopping__btn--reset']}`}
                onClick={resetShoppingList}
              >
                <Clear />
                <SrOnly>Reset shopping list</SrOnly>
              </button>
            )}
            <button title="Close shopping list" className={styles.shopping__btn} onClick={toggleShoppingList}>
              <Close />
              <SrOnly>Close shopping list</SrOnly>
            </button>
          </div>
        </div>
        <div className={styles.shopping__scrollable}>
          {shoppingList.length > 0 ? (
            shoppingList.map((item) => (
              <div key={item.slug}>
                <div className={styles['shopping__meal-container']}>
                  <h5 className={styles.shopping__meal}>{item.name}</h5>
                  <button
                    className={`${styles.shopping__btn} ${styles.shopping__remove}`}
                    type="button"
                    onClick={() => removeFromShoppingList(item)}
                  >
                    <SrOnly>Remove {item.name}</SrOnly>
                    <Close />
                  </button>
								</div>
                <ul className={styles.shopping__list}>
                  {item.ingredientCollection.items.map((ingredient) => (
                    <Ingredient key={`ingredient-${ingredient.product}`} ingredient={ingredient} />
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div>Your basket is empty</div>
          )}
        </div>
      </div>
    </div>
  );
};
