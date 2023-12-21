import React from 'react';
import styles from '../styles/Intro.module.css';
import Image from 'next/image';

const Intro = () => {
	return (
		<section id={styles['intro']}>
			<div className={styles['intro-inner']}>
                <Image src='/img/main_1.png' width={250} height={250} alt='main'/>
                <h1 className={styles['intro-title']}>안녕하세요</h1>
                <h1 className={styles['intro-title']}>Hello</h1>
            </div>
		</section>
	);
};

export default Intro;
