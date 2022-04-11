export type Ingredient = {
    name: string;
    quantity: string;
    quantityType?: string;
}

export type Method = {
    desc: string;
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
    method?: Array<Method>
    lastCooked?: Date;
};

export type Basket = {
    basket: Array<Meal>;
};