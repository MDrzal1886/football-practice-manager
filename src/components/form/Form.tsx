import {
	Dispatch,
	FC,
	FormEvent,
	SetStateAction,
	useEffect,
	useMemo,
	useState
} from 'react';

// styles
import styles from './Form.module.scss';

// components
import Input from '@components/design-system/input/Input';
import Select from '@components/design-system/select/Select';
import Textarea from '@components/design-system/textarea/Textarea';
import Button from '@components/design-system/button/Button';

// data
import {practiceTypesData} from '@data/practiceTypes';

// types
import {
	PracticeObject,
	PracticeTypes
} from '@src/@types';

type FormProps = {
	allPractices: PracticeObject[]
	editPractice?: PracticeObject,
	isValidate: boolean,
	setIsValidate: Dispatch<SetStateAction<boolean>>,
	showError: boolean,
	onSubmit: (e: FormEvent<HTMLFormElement>, practice: PracticeObject) => void
}

const Form:FC<FormProps> = ({
	allPractices,
	editPractice,
	isValidate,
	setIsValidate,
	showError,
	onSubmit
}) => {
	const [practiceTypeValue, setPracticeTypeValue] = useState('');
	const [nameValue, setNameValue] = useState('');
	const [numberOfPlayersValue, setNumberOfPlayersValue] = useState('');
	const [descriptionValue, setDescriptionValue] = useState('');
	
	const {
		allPracticesMemo,
		editPracticeMemo,
		practiceMemo
	} = useMemo(() => ({
		allPracticesMemo: allPractices,
		editPracticeMemo: editPractice,
		practiceMemo: {
			practiceType: practiceTypeValue as PracticeTypes,
			name: nameValue,
			numberOfPlayers: numberOfPlayersValue,
			description: descriptionValue
		}
	}), [allPractices, editPractice, descriptionValue, nameValue, practiceTypeValue, numberOfPlayersValue]);
	
	useEffect(() => {
		if (editPracticeMemo) {
			setPracticeTypeValue(editPracticeMemo.practiceType);
			setNameValue(editPracticeMemo.name);
			setNumberOfPlayersValue(editPracticeMemo.numberOfPlayers);
			setDescriptionValue(editPracticeMemo.description);
		}
	}, [editPracticeMemo]);
	
	useEffect(() => {
		if (practiceMemo.practiceType === '' ||
			practiceMemo.name === '' ||
			(!editPracticeMemo && allPracticesMemo.find(item => item.name === practiceMemo.name)) ||
			isNaN(Number(practiceMemo.numberOfPlayers)) ||
			Number(practiceMemo.numberOfPlayers) < 1 ||
			practiceMemo.description === '') {
			setIsValidate(false);
		} else {
			setIsValidate(true);
		}
	}, [practiceMemo, allPracticesMemo, editPracticeMemo, setIsValidate]);
	return (
		<form
			className={styles.form}
			onSubmit={(e) => onSubmit(e, practiceMemo)}
			noValidate
		>
			<div className={styles.column}>
				<Input
					type="text"
					label="Nazwa ćwiczenia"
					placeholder="Wprowadź nazwę"
					value={nameValue}
					onChange={setNameValue}
					error={showError && (nameValue === '' || (!editPractice && !!allPractices.find(practice => practice.name === nameValue)))}
					errorMessage={nameValue === '' ?
						'Wprowadź nazwę'
						:
						!editPractice && !!allPractices.find(practice => practice.name === nameValue) ?
							'Ta nazwa już istnieje'
							:
							''
					}
					disabled={!!editPractice}
				/>
				<Select
					label="Typ"
					options={practiceTypesData}
					value={practiceTypeValue}
					onChange={setPracticeTypeValue}
					error={showError && practiceTypeValue === ''}
					errorMessage="Wybierz typ"
				/>
			</div>
			<div className={styles.column}>
				<Input
					type="number"
					label="Ilość zawodników"
					placeholder="Wprowadź ilość"
					value={numberOfPlayersValue}
					onChange={setNumberOfPlayersValue}
					error={showError && (isNaN(Number(numberOfPlayersValue)) || Number(numberOfPlayersValue) < 1)}
					errorMessage={numberOfPlayersValue === '' ?
						"Podaj liczbę"
						:
						(isNaN(Number(numberOfPlayersValue)) || Number(numberOfPlayersValue) < 1) ?
							"Podaj poprawną liczbę"
							:
							''
					}
					disabled={false}
				/>
				<Textarea
					label="Opis"
					placeholder="Dodaj opis"
					value={descriptionValue}
					onChange={setDescriptionValue}
					error={showError && descriptionValue === ''}
					errorMessage="Wprowadź opis"
				/>
			</div>
			<div className={styles.button_wrapper}>
				<Button
					name={editPractice ? 'Edytuj' : 'Dodaj'}
					disabled={!isValidate}
				/>
			</div>
		</form>
	);
}

export default Form;