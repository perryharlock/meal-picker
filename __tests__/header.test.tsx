import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header/Header';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('does not render basket button if basket is empty', () => {
    render(<Header basketLength={0} toggleBasket={() => console.log('hi')} animate={false} />);

    const basketButton = screen.queryByTestId('header-basket');

    expect(basketButton).toBeNull();
  }),
    it('renders the basket button if there are items in the basket', () => {
      render(<Header basketLength={1} toggleBasket={() => console.log('hi')} animate={false} />);

      const basketButton = screen.getByTestId('header-basket');

      expect(basketButton).toBeInTheDocument();
    });
});
