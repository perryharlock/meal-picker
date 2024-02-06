import React from 'react';
import { NextPage} from 'next';

import { Meal as MealType } from '../types/meals';
import { getMealDetail, getAllMeals } from '../lib/api'

import { Layout } from '../components/Layout/Layout';
import { Meal } from '../components/Meal/Meal';

import slugify from 'slugify';

const MealPage: NextPage<MealType> = ({ slug, name, image, time, serves, type, ingredientCollection, method }) => {
  const meal: MealType = {
    slug: slug,
    name: name,
    image: image,
    time: time,
    serves: serves,
    type: type,
    ingredientCollection: ingredientCollection,
    method: method,
  };

  return (
    <Layout>
      <Meal meal={meal} />
    </Layout>
  );
};

export const getStaticProps = async ({ params }: {
  params: { meal: string }
}) => {
	const { meal } = await getMealDetail(params.meal);

  return {
    props: {
      slug: meal.slug,
      name: meal.name,
      image: meal.image || null,
      time: meal.time,
      serves: meal.serves || null,
			type: meal.type,
			ingredientCollection: meal.ingredientCollection,
      method: meal.method || null,
    },
  };
};

export const getStaticPaths = async () => {
	const meals: MealType[] = await getAllMeals(true)
  const paths: any[] = meals.map((meal: MealType) => ({
    params: { meal: meal.slug },
	}));

  return {
    paths,
    fallback: false,
  };
};

export { MealPage as default };
