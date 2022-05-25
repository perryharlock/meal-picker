import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MealCard } from '../components/MealCard/MealCard';

import mock from '../data/mock.json';

describe('Meal card', () => {
  it('renders the add to shopping list button if meal is not in the shopping list', () => {
    const handleAddMock = jest.fn();
    const handleRemoveMock = jest.fn();

    render(
      <ul>
        {mock.map((meal) => (
          <MealCard
            key={meal.url}
            meal={meal}
            handleRemove={handleRemoveMock}
            handleAdd={handleAddMock}
            isInShoppingList={false}
            lazyLoad={false}
          />
        ))}
      </ul>,
    );

    const shoppingListButton = screen.getByTestId('add-to-shopping-list');

    expect(shoppingListButton).toHaveTextContent('+');
  });

  it('renders the remove from shopping list button if meal is in the shopping list', () => {
    const handleAddMock = jest.fn();
    const handleRemoveMock = jest.fn();

    render(
      <ul>
        {mock.map((meal) => (
          <MealCard
            key={meal.url}
            meal={meal}
            handleRemove={handleRemoveMock}
            handleAdd={handleAddMock}
            isInShoppingList={true}
            lazyLoad={false}
          />
        ))}
      </ul>,
    );

    const shoppingListButton = screen.getByTestId('remove-from-shopping-list');

    expect(shoppingListButton).toHaveTextContent('-');
  });

  it('adds the meal to the shopping list when the add button is clicked', () => {
    const handleAddMock = jest.fn();
    const handleRemoveMock = jest.fn();

    render(
      <ul>
        {mock.map((meal) => (
          <MealCard
            key={meal.url}
            meal={meal}
            handleRemove={handleRemoveMock}
            handleAdd={handleAddMock}
            isInShoppingList={false}
            lazyLoad={false}
          />
        ))}
      </ul>,
    );

    const shoppingListButton = screen.getByTestId('add-to-shopping-list');

    fireEvent.click(shoppingListButton);
    expect(handleAddMock).toHaveBeenCalled();
  });

  it('removes the meal fom the shopping list when the remove button is clicked', () => {
    const handleAddMock = jest.fn();
    const handleRemoveMock = jest.fn();

    render(
      <ul>
        {mock.map((meal) => (
          <MealCard
            key={meal.url}
            meal={meal}
            handleRemove={handleRemoveMock}
            handleAdd={handleAddMock}
            isInShoppingList={true}
            lazyLoad={false}
          />
        ))}
      </ul>,
    );

    const shoppingListButton = screen.getByTestId('remove-from-shopping-list');

    fireEvent.click(shoppingListButton);
    expect(handleRemoveMock).toHaveBeenCalled();
  });
});
