import React,
{
	FormEvent,
	useState
} from 'react';

// assets
import background from '@assets/background/background.jpg';

// styles
import styles from './App.module.scss';

//components
import Header from '@components/header/Header';
import SinglePracticeType from '@components/single-practice-type/SinglePracticeType';
import Modal from '@components/modal/Modal';
import Form from '@components/form/Form';

// types
import {PracticeObject} from '@src/@types';

// data
import {practiceTypesData} from '@data/practiceTypes';

const App = () => {
	const [allPractices, setAllPractices] = useState<PracticeObject[]>([]);
	const [practiceToEdit, setPracticeToEdit] = useState<PracticeObject>();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isValidate, setIsValidate] = useState(false);
	const [showError, setShowError] = useState(false);
	
	const handlePracticeEdit = (editPractice: PracticeObject) => {
		setPracticeToEdit(editPractice);
		setIsModalOpen(true);
	}
	
	const handleDeletePractice = (practiceName: string) => {
		const newPractices = allPractices.filter(practice => practice.name !== practiceName);
		setAllPractices(newPractices);
	}
	
	const handleModalClose = () => {
		setIsModalOpen(false);
		setPracticeToEdit(undefined);
		setShowError(false);
	}
	
	const handleOnSubmit = (e: FormEvent<HTMLFormElement>, practice: PracticeObject) => {
		e.preventDefault();
		
		if (!isValidate) {
			setShowError(true);
		} else {
			if (!allPractices.find(item => item.name === practice.name)) {
				practice.createdAt = new Date();
				setAllPractices(prev => [...prev, practice]);
			} else {
				const newPractices = allPractices.map(item => {
					if (item.name === practice.name) {
						practice.createdAt = item.createdAt;
						return practice;
					} else {
						return item;
					}
				});
				setAllPractices(newPractices);
			}
			
			setPracticeToEdit(undefined);
			setIsModalOpen(false);
			setShowError(false);
		}
	}
	return (
		<div className={styles.app}>
			<div
				style={{backgroundImage: `url(${background})`}}
				className={styles.background}
			/>
			<div className={styles.content}>
				<Header handleModalOpen={() => setIsModalOpen(true)}/>
				<div className={styles.practice_types_list_wrapper}>
					{practiceTypesData.map((practiceType, index) => (
						<SinglePracticeType
							key={index}
							name={practiceType}
							practices={allPractices.filter(practice => practice.practiceType === practiceType)}
							handleEdit={handlePracticeEdit}
							handleDelete={handleDeletePractice}
						/>
					))}
				</div>
			</div>
			{isModalOpen &&
				<Modal handleClose={handleModalClose}>
					<Form
						allPractices={allPractices}
						showError={showError}
						isValidate={isValidate}
						setIsValidate={setIsValidate}
						onSubmit={handleOnSubmit}
						editPractice={practiceToEdit}
					/>
				</Modal>
			}
		</div>
	);
}

export default App;
