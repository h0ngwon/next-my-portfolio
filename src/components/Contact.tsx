'use client';
import React from 'react';
import styles from '../styles/Contact.module.css';
import useShowFramer from '@/app/hooks/useShowFramer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
	const { parent, item } = useShowFramer();
	return (
		<section id='contact' className={styles['contact-section']}>
			<motion.div
				className={styles['contact-title']}
				variants={parent}
				initial='hidden'
				whileInView='visible'
			>
				Contact
			</motion.div>
			<motion.div
				className={styles['contact-inner']}
				variants={parent}
				initial='hidden'
				whileInView='visible'
			>
				<motion.div className={styles['contact-content-wrapper']}>
					<motion.div whileHover={{ rotate: 180 }}>
						<Link
							href='https://velog.io/@h0ngwon/posts'
							target='_blank'
						>
							<Image
								src='/img/blogger.png'
								width={250}
								height={250}
								alt='github'
							/>
						</Link>
					</motion.div>
                    
                    <motion.div whileHover={{rotate:-180}}>
					<Link href='https://github.com/h0ngwon' target='_blank'>
						<Image
							src='/img/github.png'
							width={250}
							height={250}
							alt='github'
						/>
					</Link>
                    </motion.div>

                    <motion.div whileHover={{scale: 1.2}}>
					<Link href='mailto:w___on@naver.com'>
						<Image
							src='/img/mail.png'
							width={250}
							height={250}
							alt='github'
						/>
					</Link>
                    </motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Contact;
