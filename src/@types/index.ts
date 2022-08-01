export type PracticeTypes = '' | 'Rozgrzewki' | 'Ćwiczenia motoryczne' | 'Ćwiczenia techniczne' | 'Gry zadaniowe';

export interface PracticeObject {
	practiceType: PracticeTypes,
	name: string,
	numberOfPlayers: string,
	description: string,
	createdAt?: Date,
}