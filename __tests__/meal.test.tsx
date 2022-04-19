import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Meal } from '../components/Meal/Meal';

import mock from '../data/mock.json';

describe('Meal card', () => {
  it('renders the add basket button if meal is not in the basket', () => {
    render(
      <ul>
        {mock.map((meal) => (
          <Meal
            key={meal.id}
            meal={meal}
            handleRemove={() => console.log('remove')}
            handleAdd={() => console.log('add')}
            isInBasket={false}
            lazyLoad={false}
          />
        ))}
      </ul>,
    );

    const basketButton = screen.getByTestId('add-to-basket');

    expect(basketButton).toHaveTextContent('+');
  });

  it('renders the remove basket button if meal is in the basket', () => {
    render(
      <ul>
        {mock.map((meal) => (
          <Meal
            key={meal.id}
            meal={meal}
            handleRemove={() => console.log('remove')}
            handleAdd={() => console.log('add')}
            isInBasket={true}
            lazyLoad={false}
          />
        ))}
      </ul>,
    );

    const basketButton = screen.getByTestId('remove-from-basket');

    expect(basketButton).toHaveTextContent('-');
  });
});
