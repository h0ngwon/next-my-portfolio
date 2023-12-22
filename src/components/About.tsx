'use client';
import useShowFramer from '@/app/hooks/useShowFramer';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

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
				<motion.div className={styles['about-main']} variants={item}>
					<motion.img
						src='/img/about_1.png'
						width={420}
						height={420}
						alt='about_1'
					/>
					<motion.article variants={item}>
						<motion.div>
							<h1 className={styles['about-main-title']}>
								안녕하세요! 항상 성장하고싶은 개발자
								임홍원입니다.
							</h1>
							<p className={styles['about-main-content']}>
								<span className={styles['about-content-title']}>🎓 Education</span>
								<span>
									2012.03 - 2015.02 선린인터넷 고등학교
									웹운영과 졸업
								</span>
								<span>
									2016.03 - 2023.08 세종대학교 컴퓨터공학과
									졸업
								</span>
								<span className={styles['about-content-title']}>💻 Experience</span>
								<span>
									2022.06 ~ 2022.06 2022 제 13회 창의설계
									경진대회 (세종대학교)
								</span>
								<span>
									2022.10 ~ 2022.12 우아한테크코스 5기
									프리코스 - 웹 백엔드 / 서버
								</span>
								<span>
									2023.10 - 2024.02 내일배움캠프 React 3기
									수료
								</span>
							</p>
						</motion.div>
					</motion.article>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default About;
