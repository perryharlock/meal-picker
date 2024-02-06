import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Search } from '../components/Search/Search';

describe('Search', () => {
  it('marks the correct radio button as checked', () => {
    const searchMealsMock = jest.fn();

    render(<Search searchTerm="/chorizo-carbonara" onChangeValue={searchMealsMock} searchType="meal" />);

    const selectedRadio = screen.getByTestId('radio-meal');
    const notSelectedRadio = screen.getByTestId('radio-all');

    expect(selectedRadio).toBeChecked();
    expect(notSelectedRadio).not.toBeChecked();
  });

  it('shows the correct value in the search input', () => {
    const searchMealsMock = jest.fn();

    render(<Search searchTerm="/chorizo-carbonara" onChangeValue={searchMealsMock} searchType="" />);

    const searchInput = screen.getByTestId('search-input');

    expect(searchInput).toHaveValue('/chorizo-carbonara');
  });

  it('changes the search results when input value is changed', () => {
    const searchMealsMock = jest.fn();

    render(<Search searchTerm="/chorizo-carbonara" onChangeValue={searchMealsMock} searchType="" />);

    const searchInput = screen.getByTestId('search-input');

    fireEvent.change(searchInput, { target: { value: 'meal' } });
    expect(searchMealsMock).toHaveBeenCalled();
  });
});
