'use client';
import useShowFramer from '@/app/hooks/useShowFramer';
import styles from '../styles/Portfolio.module.css';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DataContext } from '@/app/context/dataContext';
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {
	const { parent, item } = useShowFramer();
	const data = useContext(DataContext);
	return (
		<section id='portfolio' className={styles['portfolio-section']}>
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
						<Link
							key={portItem.id}
							target='_blank'
							href={portItem.portLink}
						>
							<motion.div
								key={portItem.id}
								className={styles['portfolio-card']}
								variants={item}
								whileHover={{
									scale: 1.1,
									transition: { duration: 0.3 },
								}}
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
								<div
									className={styles['portfolio-item-content']}
								>
									{portItem.portContent}
								</div>
							</motion.div>
						</Link>
					);
				})}
			</motion.div>
		</section>
	);
};

export default Portfolio;
