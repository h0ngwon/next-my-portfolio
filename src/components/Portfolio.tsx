'use client';
import useShowFramer from '@/app/hooks/useShowFramer';
import styles from '../styles/Portfolio.module.css';
import { motion } from 'framer-motion';
const Portfolio = () => {
	const { parent, item } = useShowFramer();
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
				<motion.div
					className={styles['portfolio-card']}
					variants={item}
				>
					test1
				</motion.div>
                <motion.div
					className={styles['portfolio-card']}
					variants={item}
				>
					test2
				</motion.div>
                <motion.div
					className={styles['portfolio-card']}
					variants={item}
				>
					test3
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Portfolio;
