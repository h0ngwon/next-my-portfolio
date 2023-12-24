'use client';
import useShowFramer from '@/app/hooks/useShowFramer';
import styles from '../styles/Skill.module.css';
import { motion } from 'framer-motion';

const Skill = () => {
	const { parent, item } = useShowFramer();
	return (
		<section id='skill' className={styles['skill-section']}>
			<motion.div
				className={styles['skill-inner']}
				variants={parent}
				initial='hidden'
				whileInView='visible'
			>
				<motion.div className={styles['skill-title']} variants={item}>
                    <h1>My Skills</h1>
                </motion.div>
				<motion.div
					className={styles['skill-card-slider']}
                    variants={item}
				>
					<input type='radio' id='1' name='sld' defaultChecked/>
					<label htmlFor='1'></label>
					<input type='radio' id='2' name='sld' />
					<label htmlFor='2'></label>
					<input type='radio' id='3' name='sld' />
					<label htmlFor='3'></label>
					<input type='radio' id='4' name='sld' />
					<label htmlFor='4'></label>
					<input type='radio' id='5' name='sld' />
					<label htmlFor='5'></label>
                    <input type='radio' id='6' name='sld' />
					<label htmlFor='6'></label>
                    <input type='radio' id='7' name='sld' />
					<label htmlFor='7'></label>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Skill;
