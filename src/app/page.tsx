import About from '@/components/About';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Portfolio from '@/components/Portfolio';
import Skill from '@/components/Skill';
import React from 'react';
import '../styles/global.css';
import '../styles/reset.css';

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<main id='main' role='main'>
				<Intro />
				<About />
				<Skill />
				<Portfolio />
			</main>
		</React.Fragment>
	);
};

export default Home;
