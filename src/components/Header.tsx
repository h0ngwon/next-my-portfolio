'use client'
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
	return (
		<header id={styles['header']} role='banner'>
			<div className={styles['header-inner']}>
				<div className={styles['header-logo']}>
					<a href='/'>
						<Image
							src='/img/logo.png'
							alt='image'
							width={50}
							height={50}
						/>
						WON
					</a>
				</div>
				<nav role='navigation' aria-label='메인 메뉴'>
					<ul>
						<li>
							<a href='#'>ABOUT ME</a>
						</li>
						<li>
							<a href='#'>SKILL</a>
						</li>
						<li>
							<a href='#'>PORTFOLIO</a>
						</li>
						<li>
							<a href='#'>CONTACT</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
