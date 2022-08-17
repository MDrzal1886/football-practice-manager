import {
	render,
	screen
} from '@testing-library/react';

// components
import Header from '@components/header/Header';

describe('Header tests', () => {
	it('should show h1', () => {
		render(<Header handleModalOpen={jest.fn} />);
		const h1El = screen.getByRole('heading');
		expect(h1El).toHaveTextContent(/MENADŻER ĆWICZEŃ PIŁKARSKICH/i);
	});
	
	it('should button display', () => {
		render(<Header handleModalOpen={jest.fn} />);
		const buttonEl = screen.getByRole('button');
		expect(buttonEl).toBeInTheDocument();
	});
});