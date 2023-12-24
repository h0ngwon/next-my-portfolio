'use client';
import useShowFramer from '@/app/hooks/useShowFramer';
import styles from '../styles/Portfolio.module.css';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DataContext } from '@/app/context/dataContext';
import Image from 'next/image';

const Portfolio = () => {
	const { parent, item } = useShowFramer();
	const data = useContext(DataContext);
	return (
		<section id={styles['portfolio']}>
			<motion.h1
				className={styles['portfolio-title']}
				variants={parent}
				initial='hidden'
				whileInView='visible'
			>
				PORTFOLIOS
			</motion.h1>

			<motion.div
				className={styles['portfolio-inner']}
				variants={parent}
				initial='hidden'
				whileInView='visible'
			>
				{data?.portfolio.map((portItem) => {
					return (
						<motion.div
							key={portItem.id}
							className={styles['portfolio-card']}
							variants={item}
						>
							<div
								className={
									styles['portfolio-item-image-wrapper']
								}
							>
								<Image
									src={portItem.portImage}
									width={350}
									height={250}
									alt='portImage'
								/>
							</div>
							<div className={styles['portfolio-item-title']}>
								{portItem.portTitle}
							</div>
							<div className={styles['portfolio-item-content']}>
								{portItem.portContent}
							</div>
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
};

export default Portfolio;
