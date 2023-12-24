'use client';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
	return (
		<header id='header' className={styles['header-section']} role='banner'>
			<div className={styles['header-inner']}>
				<div className={styles['header-logo']}>
					<a href='#intro'>
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
							<a href='#about'>ABOUT ME</a>
						</li>
						<li>
							<a href='#skill'>SKILL</a>
						</li>
						<li>
							<a href='#portfolio'>PORTFOLIO</a>
						</li>
						<li>
							<a href='#contact'>CONTACT</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
