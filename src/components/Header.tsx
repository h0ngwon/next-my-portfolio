import React from 'react';

const Header = () => {
	return <header id='header' role='banner'>
        <div className='header-inner'>
            <nav className='header-nav' role='navigation' aria-label='메인 메뉴'>
                <ul>
                    <li><a href='#'>Me</a></li>
                    <li><a href='#'>Skill</a></li>
                    <li><a href='#'>Portfolio</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
};

export default Header;
