This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Site is deployed via Vercel to https://meal-picker-pi.vercel.app/

## What is mealpicker

This is a personal project built in NextJS/Typescript/SCSS.

We were forever forgetting what meals we liked and which recipe books or websites they were on so that we could find the ingredients we would need and the cooking instructions.

I decided to create a simple website which would act as a central repository for our meals so that we could build a shopping list and get access to the cooking instructions in one place.

The meals are retrieved from [Contentful CMS](https://www.contentful.com/) and displayed in a list view with an add to shopping list option which will build a list of ingredients required.

The meal details page shows the ingredients and the cooking method.

## Getting Started

Clone this repo

Install dependencies

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests

You can run tests locally using

```bash
yarn test
```

## Prettier

You can run prettier using

```bash
yarn prettier
```

and to fix prettier issues

```bash
yarn prettier:fix
```
