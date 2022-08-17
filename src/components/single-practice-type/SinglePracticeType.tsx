import {
	FC,
	useState
} from 'react';

// styles
import styles from './SinglePracticeType.module.scss';

// components
import SinglePractice from '@components/single-practice/SinglePractice';

//types
import {PracticeObject} from '@src/@types';

type SinglePracticeTypeProps = {
	name: string,
	practices: PracticeObject[],
	handleEdit: (editPractice: PracticeObject) => void,
	handleDelete: (practiceName: string) => void
}

const SinglePracticeType:FC<SinglePracticeTypeProps> = ({
	name,
	practices,
	handleEdit,
	handleDelete
}) => {
	const [practiceToOpen, setPracticeToOpen] = useState('');
	return (
		<div
			className={styles.single_practice_type_wrapper}
			data-testid="single-type"
		>
			<h2 className={`${styles.type_title} ${practices.length > 0 ? '' : styles.no_margin}`}>{name}</h2>
			<div className={styles.practices_list_wrapper}>
				{practices.map(practice => (
					<SinglePractice
						key={practice.name}
						practice={practice}
						practiceToOpen={practiceToOpen}
						setPracticeToOpen={setPracticeToOpen}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				))}
			</div>
		</div>
	);
}

export default SinglePracticeType;