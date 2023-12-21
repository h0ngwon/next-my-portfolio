import Header from '@/components/Header';
import Intro from '@/components/Intro';
import React from 'react';
import '../styles/global.css';
import '../styles/reset.css';

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<main id='main' role='main'>
				<Intro />
			</main>
		</React.Fragment>
	);
};

export default Home;
