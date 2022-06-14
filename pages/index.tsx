import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import * as fs from 'fs';
import * as path from 'path';

import { Meal as MealType } from '../types/meals';
import { Layout } from '../components/Layout/Layout';
import { Meals } from '../components/Meals/Meals';

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

export const getStaticProps: GetStaticProps = async () => {
  const getDataFromFile = (url: string) => {
    const mealsDataFile = fs.readFileSync(path.resolve(process.cwd(), `data/pages/${url}.json`));
    return JSON.parse(mealsDataFile.toString());
  };

  const getMealsData = () => {
    let mealData: Array<MealType> = [];
    fs.readdirSync(path.resolve(process.cwd(), 'data/pages/')).forEach((file) => {
      if (file.endsWith('.json')) {
        const fileName = file.slice(0, -5);
        mealData.push(getDataFromFile(fileName));
      }
    });
    return mealData;
  };

  const meals = getMealsData();

  return {
    props: {
      mealData: meals,
    },
  };
};

export default Home;
