import {
	render,
	screen
} from '@testing-library/react';

// components
import Modal from '@components/modal/Modal';

describe('Modal tests', () => {
	it('should close icon is visible', () => {
		render(<Modal handleClose={jest.fn} />);
		const closeIconEl = screen.getByTestId('close-icon');
		expect(closeIconEl).toBeVisible();
	});
})