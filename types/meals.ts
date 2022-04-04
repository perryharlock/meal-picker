export type Ingredient = {
    name: string;
    quantity: string;
    quantityType?: string;
}

export type Meal = {
    id : string,
    url: string;
    name: string;
    rating?: number;
    time?: number;
    img?: string;
    tags?: string[];
    serves?: number;
    ingredients: Array<Ingredient>;
    method?: [];
    lastCooked?: Date;
};

export type Basket = {
    basket: Array<Meal>;
};