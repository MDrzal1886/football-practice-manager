import {
	Dispatch,
	FC,
	SetStateAction
} from 'react';

// assets
import {ReactComponent as Arrow} from '@assets/icons/arrow.svg';

// styles
import styles from './SinglePractice.module.scss';

// hooks
import useConvertDate from '@hooks/useConvertDate';

// components
import Button from '@components/design-system/button/Button';

// types
import {PracticeObject} from '@src/@types';

type SinglePracticeProps = {
	practice: PracticeObject,
	practiceToOpen?: string,
	setPracticeToOpen: Dispatch<SetStateAction<string>>,
	handleEdit: (editPractice: PracticeObject) => void,
	handleDelete: (practiceName: string) => void
}

const SinglePractice:FC<SinglePracticeProps> = ({
	practice,
	practiceToOpen,
	setPracticeToOpen,
	handleEdit,
	handleDelete
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.name_and_date_wrapper}>
				<p className={styles.text}>Nazwa: <b>{practice.name}</b></p>
				<p>Dodano: <b>{useConvertDate(practice.createdAt)}</b></p>
				<div
					className={`${styles.arrow_wrapper} ${practiceToOpen === practice.name ? styles.rotate : ''}`}
					onClick={() => setPracticeToOpen(practiceToOpen === practice.name ? '' : practice.name)}
				>
					<Arrow />
				</div>
			</div>
			{practiceToOpen === practice.name &&
				<div>
					<p className={styles.text}>Liczba zawodników: <b>{practice.numberOfPlayers}</b></p>
					<p className={styles.text}>{practice.description}</p>
					<div className={styles.buttons_wrapper}>
						<div className={styles.button_wrapper}>
							<Button
								name="Edytuj"
								onClick={() => handleEdit(practice)}
								disabled={false}
							/>
						</div>
						<div className={styles.button_wrapper}>
							<Button
								name="Usuń"
								onClick={() => handleDelete(practice.name)}
								disabled={false}
							/>
						</div>
					</div>
				</div>
			}
		</div>
	);
}

export default SinglePractice;