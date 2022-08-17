import {
	render,
	screen
} from '@testing-library/react';

// components
import SinglePracticeType from '@components/single-practice-type/SinglePracticeType';

describe('SinglePracticeType tests', () => {
	it('should single practice type have title', () => {
		render(<SinglePracticeType
			name="Test title"
			practices={[]}
			handleDelete={jest.fn}
			handleEdit={jest.fn}
		/>);
		const h2El = screen.getByRole('heading');
		expect(h2El).toHaveTextContent(/test title/i);
	});
	
	it('should show single practices', () => {
		render(<SinglePracticeType
			name="Test title"
			practices={[
				{
					practiceType: 'Rozgrzewki',
					name: 'Test practice',
					numberOfPlayers: '10',
					createdAt: new Date(),
					description: 'Test description'
				},
				{
					practiceType: 'Rozgrzewki',
					name: 'Test practice 1',
					numberOfPlayers: '10',
					createdAt: new Date(),
					description: 'Test description'
				}
			]}
			handleDelete={jest.fn}
			handleEdit={jest.fn}
		/>);
		const singlePracticesEl = screen.getAllByTestId('single-practice');
		expect(singlePracticesEl.length).toBe(2);
	});
});