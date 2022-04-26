export type Ingredient = {
  name: string;
  quantity: string;
  quantityType?: string;
};

export type Meal = {
  url: string;
  name: string;
  time?: number;
  img?: string;
  serves?: number;
  type: string;
  ingredients: Array<Ingredient>;
  method?: string[];
};

export type Basket = {
  basket: Array<Meal>;
};
