import styles from './Footer.module.scss';
import museumLogo from '../../assets/museum-logo-light.svg';
import modsenLogo from '../../assets/modsen-logo.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<header className={styles.footer}>
			<div>
				<Link to={'/'}>
					<img src={museumLogo} alt='museum logo' />
				</Link>
				<img src={modsenLogo} alt='modsen logo' />
			</div>
		</header>
	);
}