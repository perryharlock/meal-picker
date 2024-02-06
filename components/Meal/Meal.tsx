import React from 'react';

import { Meal as MealType } from '../../types/meals';

import { useStateContext } from '../../context/StateContext';
import { Grid } from '../Grid/Grid';
import { Ingredient } from '../Ingredient/Ingredient';
import { Tabs } from '../Tabs/Tabs';
import { Tab } from '../Tabs/Tab';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { Markdown } from '../../lib/markdown';

import styles from './Meal.module.scss';

type MealProps = {
  meal: MealType;
};

export const Meal: React.FC<MealProps> = ({ meal }) => {
  const { isInShoppingList, removeFromShoppingList, addToShoppingList } = useStateContext();
	const { slug, name, time, serves, image, ingredientCollection, method } = meal;

  return (
    <Grid>
      <Breadcrumb name={name} url={'/' + slug} />
      <div className={styles.meal__grid}>
        <div className={styles.meal__summary}>
          <div className={styles.meal__text}>
            <h2 className={styles.meal__title}>{name}</h2>
            <ul className={styles['meal__info-list']}>
              <li className={styles.meal__info}>{time} minutes</li>
              {serves && <li className={styles.meal__info}>Serves {serves}</li>}
            </ul>
            <button
              data-test-id={isInShoppingList(slug) ? 'remove-from-shopping-list' : 'add-to-shopping-list'}
              className={`${styles.meal__btn} ${isInShoppingList(slug) ? styles['meal__btn--remove'] : ''}`}
              onClick={() => (isInShoppingList(slug) ? removeFromShoppingList(meal) : addToShoppingList(meal))}
            >
              {isInShoppingList(slug) ? '- Remove from shopping list' : '+ Add to shopping list'}
            </button>
          </div>
          <div className={styles['meal__img-container']}>
            <img
              className={styles.meal__img}
              src={image ? image.url : 'meal-placeholder.webp'}
              alt={name}
              width="375"
              height="250"
            />
            <span className={styles.meal__type}>{meal.type}</span>
          </div>
        </div>
        <div className={styles.meal__ingredients}>
					<Tabs>
						<Tab title="Ingredients">
							{ingredientCollection ? (
								<ul className={styles['meal__ingredients-list']}>
									{ingredientCollection.items.map((ingredient) => (
										<Ingredient key={`ingredient-${ingredient.product}`} ingredient={ingredient} />
									))}
								</ul>
							) : (
								<p>No ingredients available</p>
							)}
						</Tab>
            <Tab title="Method">
              {/* {method ? (
								<div className={styles['meal__method-list']}>
									<Markdown content={method} />
									</div>
              ) : ( */}
                <p>No method availabe</p>
              {/* )} */}
            </Tab>
          </Tabs>
        </div>
      </div>
    </Grid>
  );
};

export default Meal;
