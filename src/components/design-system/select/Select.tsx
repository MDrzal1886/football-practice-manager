import {
	useRef,
	FC,
	useState
} from 'react';

// assets
import {ReactComponent as Arrow} from '@assets/icons/arrow.svg';

// styles
import styles from './Select.module.scss';

// hooks
import useOutsideClick from '@hooks/useClickOutside';

type SelectProps = {
	label: string,
	options: string[],
	value: string,
	onChange: (value: string) => void,
	error: boolean,
	errorMessage?: string
}

const Select:FC<SelectProps> = ({
	label,
	value,
	options,
	onChange,
	error,
	errorMessage
}) => {
	const selectRef = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState(false);
	
	useOutsideClick(selectRef, setActive);
	
	const selectClass = `
		${styles.select}
		${active ? styles.active : styles.default}
		${error ? styles.error : ''}
	`;
	return (
		<div className={styles.container}>
			<span className={styles.label}>
				{label}
			</span>
			<div className={`${styles.arrow_wrapper} ${active ? styles.rotate : ''}`}>
				<Arrow />
			</div>
			<div
				className={selectClass}
				onClick={() => setActive(prev => !prev)}
				ref={selectRef}
			>
				{value}
				{active &&
					<div className={styles.options_container}>
						{options.map((option, index) => (
							<div
								className={styles.single_option}
								onClick={() => onChange(option)}
								key={index}
							>
								{option}
							</div>
						))}
					</div>
				}
			</div>
			<span className={styles.error_message}>
				{error && errorMessage}
			</span>
		</div>
	);
}

export default Select;