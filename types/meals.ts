// import { Content } from '../lib/markdown';

interface Asset {
  sys: {
    id: string;
  };
  url: string;
  description: string;
}

interface AssetLink {
  block: Asset[];
}

export type Content = {
  json: any;
  links: {
    assets: AssetLink;
  };
};

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
    items: Array<Ingredient>;
  };
  method?: Content;
};

export type ShoppingList = {
  shoppingList: Array<Meal>;
};
