import Header from '@/components/Header';
import Intro from '@/components/Intro';
import React from 'react';
import '../styles/global.css';
import '../styles/reset.css';
import About from '@/components/About';

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<main id='main' role='main'>
				<Intro />
                <About/>
			</main>
		</React.Fragment>
	);
};

export default Home;
