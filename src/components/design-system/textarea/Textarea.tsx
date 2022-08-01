import {
	Dispatch,
	FC,
	SetStateAction
} from 'react';

// styles
import styles from './Textarea.module.scss';

type TextareaProps = {
	label: string,
	placeholder: string,
	value: string,
	onChange: Dispatch<SetStateAction<string>>,
	error: boolean,
	errorMessage?: string
}

const Textarea:FC<TextareaProps> = ({
	label,
	placeholder,
	value,
	onChange,
	error,
	errorMessage
}) => (
	<label className={styles.label_container}>
		<span className={styles.label}>
			{label}
		</span>
		<textarea
			className={`${styles.textarea} ${error ? styles.error : ''}`}
			placeholder={placeholder}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		/>
		<span className={styles.error_message}>
			{error && errorMessage}
		</span>
	</label>
);

export default Textarea;