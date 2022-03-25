export type Tag = {
    item: string;
}

export type Ingredient = {
    name: string;
    quantity: string;
    quantityType?: string;
}

export type Meal = {
    id : string,
    name: string;
    rating?: number;
    time: number;
    img: string;
    tags: Array<Tag>;
    ingredients: Array<Ingredient>;
    method?: [];
    lastCooked?: Date;
};