import {
	render,
	screen,
	fireEvent
} from '@testing-library/react';

// components
import App from '@components/app/App';

describe('App tests', () => {
	it('should practice types shows', () => {
		render(<App />);
		const practiceTypesEl = screen.getAllByTestId('single-type');
		expect(practiceTypesEl.length).toBe(4);
	});
	
	it('should Modal be hide after first render', () => {
		render(<App />);
		const modalEl = screen.queryByTestId('modal');
		expect(modalEl).toBe(null);
	});
	
	it('should Modal shows on button click', () => {
		render(<App />);
		const headerButtonEl = screen.getByText(/dodaj ćwiczenie/i);
		fireEvent.click(headerButtonEl);
		const modalEl = screen.getByTestId('modal');
		expect(modalEl).toBeInTheDocument();
	});
});