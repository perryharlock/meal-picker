import React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import * as fs from 'fs';
import * as path from 'path';

import slugify from 'slugify';

import { Meal as MealType } from '../types/meals';

import { Layout } from '../components/Layout/Layout';
import { Meal } from '../components/Meal/Meal';

const MealPage: NextPage<MealType> = ({ url, name, img, time, serves, type, ingredients, method }) => {
  const meal: MealType = {
    url: url,
    name: name,
    img: img,
    time: time,
    serves: serves,
    type: type,
    ingredients: ingredients,
    method: method,
  };

  return (
    <Layout>
      <Meal meal={meal} />
    </Layout>
  );
};

const getUrlDataFromFile = (url: string) => {
  const mealsDataFile = fs.readFileSync(path.resolve(process.cwd(), `data/pages/${url}.json`));
  return JSON.parse(mealsDataFile.toString());
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const meal = getUrlDataFromFile(String(params?.meal));

  return {
    props: {
      url: meal.url,
      name: meal.name,
      img: meal.img || null,
      time: meal.time,
      serves: meal.serves || null,
      type: meal.type,
      ingredients: meal.ingredients,
      method: meal.method || null,
    },
  };
};

const getPageFiles = () => {
  let fileList: string[] = [];
  fs.readdirSync(path.resolve(process.cwd(), 'data/pages/')).forEach((file) => {
    if (file.endsWith('.json')) {
      const url = file.slice(0, -5);
      fileList.push(url);
    }
  });
  return fileList;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any[] = getPageFiles().map((url) => ({
    params: { meal: slugify(url) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export { MealPage as default };
