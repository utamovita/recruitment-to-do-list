import { render, screen, fireEvent } from '@testing-library/react';
import { Filter, FilterOptions } from './filter.component'; // Import komponentu oraz enum
import '@testing-library/jest-dom';

describe('Filter Component', () => {
  const mockSetFilter = jest.fn();

  beforeEach(() => {
    mockSetFilter.mockClear();
  });

  it('should render all filter buttons', () => {
    render(<Filter filter={FilterOptions.ALL} setFilter={mockSetFilter} />);

    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('Incomplete')).toBeInTheDocument();
  });

  it('should call setFilter with correct value when "All" button is clicked', () => {
    render(<Filter filter={FilterOptions.ALL} setFilter={mockSetFilter} />);

    fireEvent.click(screen.getByText('All'));

    expect(mockSetFilter).toHaveBeenCalledWith(FilterOptions.ALL);
  });

  it('should call setFilter with correct value when "Completed" button is clicked', () => {
    render(<Filter filter={FilterOptions.ALL} setFilter={mockSetFilter} />);

    fireEvent.click(screen.getByText('Completed'));

    expect(mockSetFilter).toHaveBeenCalledWith(FilterOptions.COMPLETED);
  });

  it('should call setFilter with correct value when "Incomplete" button is clicked', () => {
    render(<Filter filter={FilterOptions.ALL} setFilter={mockSetFilter} />);

    fireEvent.click(screen.getByText('Incomplete'));

    expect(mockSetFilter).toHaveBeenCalledWith(FilterOptions.INCOMPLETE);
  });
});
