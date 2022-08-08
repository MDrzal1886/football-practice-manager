import {FC} from 'react';

// styles
import styles from './Input.module.scss';

type InputProps = {
	type: string,
	label: string,
	placeholder: string,
	value: string,
	onChange: (value: string) => void,
	error: boolean,
	errorMessage?: string,
	disabled: boolean
}

const Input:FC<InputProps> = ({
	type,
	label,
	placeholder,
	value,
	onChange,
	error,
	errorMessage,
	disabled
}) => (
	<label className={styles.label_container}>
		<span className={styles.label}>
			{label}
		</span>
		<input
			className={`${styles.input} ${error ? styles.error : ''}`}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			disabled={disabled}
		/>
		<span className={styles.error_message}>
			{error && errorMessage}
		</span>
	</label>
);

export default Input;