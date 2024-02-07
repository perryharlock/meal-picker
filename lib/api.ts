const MEAL_GRAPHQL_FIELDS = `
  slug
  name
	time
	serves
	image  {
    url
  }
	type
	method {
    json
  }
	ingredientCollection {
		items {
			product
			quantity
			quantityType
		}
	}
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    },
  ).then((response) => response.json());
}

function extractMeal(fetchResponse: any): any {
  return fetchResponse?.data?.mealCollection?.items?.[0];
}

function extractMealEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.mealCollection?.items;
}

export async function getAllMeals(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      mealCollection(where: { slug_exists: true }, preview: ${
        isDraftMode ? 'true' : 'false'
      }, order: name_ASC) {
        items {
          ${MEAL_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  );
  return extractMealEntries(entries);
}

export async function getMealDetail(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      mealCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${MEAL_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  );
  return {
    meal: extractMeal(entry),
  };
}
