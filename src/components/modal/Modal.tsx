import {
	FC,
	ReactNode
} from 'react';

//assets
import {ReactComponent as Close} from '@assets/icons/close.svg';

// styles
import styles from './Modal.module.scss';

type ModalProps = {
	children?: ReactNode,
	handleClose: () => void
}

const Modal:FC<ModalProps> = ({
	children,
	handleClose
}) => (
	<div
		className={styles.background}
		data-testid="modal"
	>
		<div className={styles.modal_wrapper}>
			<div
				className={styles.close}
				onClick={handleClose}
			>
				<Close />
			</div>
			{children}
		</div>
	</div>
);

export default Modal;