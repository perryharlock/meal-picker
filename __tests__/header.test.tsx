import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../components/Header/Header';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('does not render shopping list button if shopping list is empty', () => {
    const toggleShoppingListMock = jest.fn();

    render(<Header shoppingListLength={0} toggleShoppingList={toggleShoppingListMock} animate={false} />);

    const shoppingListButton = screen.queryByTestId('header-shopping-list');

    expect(shoppingListButton).toBeNull();
  });

  it('renders the shopping list button if there are items in the shopping list', () => {
    const toggleShoppingListMock = jest.fn();

    render(<Header shoppingListLength={1} toggleShoppingList={toggleShoppingListMock} animate={false} />);

    const shoppingListButton = screen.getByTestId('header-shopping-list');

    expect(shoppingListButton).toBeInTheDocument();
  });

  it('toggles the shopping list when shopping list button is clicked', () => {
    const toggleShoppingListMock = jest.fn();

    render(<Header shoppingListLength={1} toggleShoppingList={toggleShoppingListMock} animate={false} />);

    const shoppingListButton = screen.getByTestId('header-shopping-list');

    fireEvent.click(shoppingListButton);
    expect(toggleShoppingListMock).toHaveBeenCalled();
  });
});
