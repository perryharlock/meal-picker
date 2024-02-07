import React from 'react';
import { NextPage, GetServerSideProps } from 'next';

import { Meal as MealType } from '../types/meals';
import { Layout } from '../components/Layout/Layout';
import { Meals } from '../components/Meals/Meals';

import { getAllMeals } from '../lib/api';

type MealList = {
  mealData: Array<MealType>;
};

const Home: NextPage<MealList> = ({ mealData }) => {
  return (
    <Layout>
      <Meals mealData={mealData} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const meals = await getAllMeals(true);

  return {
    props: {
      mealData: meals,
    },
  };
};

export default Home;
