import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../components/Header/Header';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('does not render basket button if basket is empty', () => {
    const toggleBasketMock = jest.fn();

    render(<Header basketLength={0} toggleBasket={toggleBasketMock} animate={false} />);

    const basketButton = screen.queryByTestId('header-basket');

    expect(basketButton).toBeNull();
  });

  it('renders the basket button if there are items in the basket', () => {
    const toggleBasketMock = jest.fn();

    render(<Header basketLength={1} toggleBasket={toggleBasketMock} animate={false} />);

    const basketButton = screen.getByTestId('header-basket');

    expect(basketButton).toBeInTheDocument();
  });

  it('toggles the basket when basket button is clicked', () => {
    const toggleBasketMock = jest.fn();

    render(<Header basketLength={1} toggleBasket={toggleBasketMock} animate={false} />);

    const basketButton = screen.getByTestId('header-basket');

    fireEvent.click(basketButton);
    expect(toggleBasketMock).toHaveBeenCalled();
  });
});
