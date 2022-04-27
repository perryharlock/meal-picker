import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Meal } from '../components/Meal/Meal';

import mock from '../data/mock.json';

describe('Meal card', () => {
  it('renders the add basket button if meal is not in the basket', () => {
    const handleAddMock = jest.fn();
    const handleRemoveMock = jest.fn();

    render(
      <ul>
        {mock.map((meal) => (
          <Meal
            key={meal.url}
            meal={meal}
            handleRemove={handleRemoveMock}
            handleAdd={handleAddMock}
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
    const handleAddMock = jest.fn();
    const handleRemoveMock = jest.fn();

    render(
      <ul>
        {mock.map((meal) => (
          <Meal
            key={meal.url}
            meal={meal}
            handleRemove={handleRemoveMock}
            handleAdd={handleAddMock}
            isInBasket={true}
            lazyLoad={false}
          />
        ))}
      </ul>,
    );

    const basketButton = screen.getByTestId('remove-from-basket');

    expect(basketButton).toHaveTextContent('-');
  });

  it('adds the meal to the basket when the add button is clicked', () => {
    const handleAddMock = jest.fn();
    const handleRemoveMock = jest.fn();

    render(
      <ul>
        {mock.map((meal) => (
          <Meal
            key={meal.url}
            meal={meal}
            handleRemove={handleRemoveMock}
            handleAdd={handleAddMock}
            isInBasket={false}
            lazyLoad={false}
          />
        ))}
      </ul>,
    );

    const basketButton = screen.getByTestId('add-to-basket');

    fireEvent.click(basketButton);
    expect(handleAddMock).toHaveBeenCalled();
  });

  it('removes the meal fom the basket when the remove button is clicked', () => {
    const handleAddMock = jest.fn();
    const handleRemoveMock = jest.fn();

    render(
      <ul>
        {mock.map((meal) => (
          <Meal
            key={meal.url}
            meal={meal}
            handleRemove={handleRemoveMock}
            handleAdd={handleAddMock}
            isInBasket={true}
            lazyLoad={false}
          />
        ))}
      </ul>,
    );

    const basketButton = screen.getByTestId('remove-from-basket');

    fireEvent.click(basketButton);
    expect(handleRemoveMock).toHaveBeenCalled();
  });
});
