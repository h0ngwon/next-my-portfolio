'use client';
import useShowFramer from '@/app/hooks/useShowFramer';
import { motion } from 'framer-motion';
import styles from '../styles/Intro.module.css';

const Intro = () => {
	const { parent, item } = useShowFramer();

	return (
		<section id={styles['intro']}>
			<motion.div
				variants={parent}
				className={styles['intro-inner']}
				initial='hidden'
				whileInView='visible'
			>
				<motion.div variants={item}>
					<motion.img
						animate={{ scale: [1, 1.1, 1] }}
						transition={{
							repeat: Infinity,
							duration: 3,
							ease: 'linear',
						}}
						src='/img/main_1.png'
						width={250}
						height={250}
						alt='main'
					/>
				</motion.div>
				<motion.h1 className={styles['intro-title']} variants={item}>
					안녕하세요
				</motion.h1>
				<motion.h1 className={styles['intro-title']} variants={item}>
					Hello
				</motion.h1>
			</motion.div>
		</section>
	);
};

export default Intro;
