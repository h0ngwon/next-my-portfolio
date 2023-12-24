'use client';
import useShowFramer from '@/app/hooks/useShowFramer';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';
import { useContext } from 'react';
import { DataContext } from '@/app/context/dataContext';

const About = () => {
	const { parent, item } = useShowFramer();
	const data = useContext(DataContext);
	return (
		<section id='about' className={styles['about-section']}>
			<motion.div
				className={styles['about-inner']}
				variants={parent}
				initial='hidden'
				whileInView='visible'
			>
				<motion.div className={styles['about-main']} variants={item}>
					<motion.img
						src={data?.about.aboutMainImage}
						width={360}
						height={360}
						alt='about_1'
					/>
					<motion.article variants={item}>
						<motion.div>
							<h1 className={styles['about-main-title']}>
								{data?.about.aboutMainTitle}
							</h1>
							<p className={styles['about-main-content']}>
								{data?.about.aboutContent.map((aboutItem) => {
									return (
										<>
											<span
												className={
													styles[
														'about-content-title'
													]
												}
												key={aboutItem.id}
											>
												{aboutItem.contentTitle}
											</span>
											{aboutItem.content.map((item) => (
												<span key={aboutItem.id}>{item}</span>
											))}
										</>
									);
								})}
							</p>
						</motion.div>
					</motion.article>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default About;
