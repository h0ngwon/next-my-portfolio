'use client';
import Image from 'next/image';
import styles from '../styles/About.module.css';
import { motion } from 'framer-motion';
import useShowFramer from '@/app/hooks/useShowFramer';

const About = () => {
	const { parent, item } = useShowFramer();

	return (
		<section id={styles['about']}>
			<motion.div
				className={styles['about-inner']}
				variants={parent}
				initial='hidden'
				whileInView='visible'
			>
				<motion.div className={styles['about-image']} variants={item}>
					<Image
						src='/img/about_1.png'
						width={420}
						height={420}
						alt='about_1'
					/>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default About;
