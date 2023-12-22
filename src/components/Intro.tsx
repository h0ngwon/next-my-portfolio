'use client';
import React from 'react';
import styles from '../styles/Intro.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Intro = () => {
	return (
		<section id={styles['intro']}>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				className={styles['intro-inner']}
			>
				<motion.div
					animate={{scale: [1, 1.1, 1]}}
                    transition={{repeat: Infinity, duration: 3, ease: 'linear'}}
				>
					<Image
						src='/img/main_1.png'
						width={250}
						height={250}
						alt='main'
					/>
				</motion.div>
				<h1 className={styles['intro-title']}>안녕하세요</h1>
				<h1 className={styles['intro-title']}>Hello</h1>
			</motion.div>
		</section>
	);
};

export default Intro;
