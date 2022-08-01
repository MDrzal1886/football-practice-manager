import React, {FC} from 'react';

// styles
import styles from './Header.module.scss';

// components
import Button from '@components/design-system/button/Button';

type HeaderProps = {
	handleModalOpen: () => void
}

const Header:FC<HeaderProps> = ({handleModalOpen}) => (
	<div className={styles.header_wrapper}>
		<h1 className={styles.title}>MENADŻER ĆWICZEŃ PIŁKARSKICH</h1>
		<div className={styles.button_wrapper}>
			<Button
				name="Dodaj ćwiczenie"
				onClick={handleModalOpen}
				disabled={false}
			/>
		</div>
	</div>
);

export default Header;