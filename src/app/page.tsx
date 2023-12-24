'use client';
import About from '@/components/About';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Portfolio from '@/components/Portfolio';
import Skill from '@/components/Skill';
import React from 'react';
import '../styles/global.css';
import '../styles/reset.css';
import { DataContext } from './context/dataContext';
import data from '../../db.json';
import Contact from '@/components/Contact';

const Home = () => {
	return (
        <DataContext.Provider value={data}>
		<React.Fragment>
			<Header />
			<main id='main' role='main'>
				<Intro />
				<About />
				<Skill />
				<Portfolio />
                <Contact/>
			</main>
		</React.Fragment>
        </DataContext.Provider>
	);
};

export default Home;
