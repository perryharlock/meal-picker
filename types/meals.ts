import { Content } from '../lib/markdown';

export type Ingredient = {
  product: string;
  quantity: number;
  quantityType?: string;
};

export type Image = {
	url: string;
	width?: number;
	quality?: number;
};

export type Meal = {
  slug: string;
  name: string;
  time?: number;
	image?: Image;
  serves?: number;
  type: string;
  ingredientCollection: {
		items: Array<Ingredient>
	}
  method?: Content;
};

export type ShoppingList = {
  shoppingList: Array<Meal>;
};
