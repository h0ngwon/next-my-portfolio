import pretendard from 'next/font/local';
import raleway from 'next/font/local';

const pretend = pretendard({
	src: './fonts/local/PretendardVariable.ttf',
    variable: '--font--pretendard',
	weight: 'normal',
    display: 'swap'
});

const rale = raleway({
	src: './fonts/local/Raleway-VariableFont_wght.ttf',
    variable: '--font-raleway',
	weight: 'normal',
    display: 'swap'
});

export const metadata = {
	title: "Won's portfolio site",
	description: "Won's portfolio site",
	keywords: [
		'포트폴리오',
		'리액트',
		'넥스트',
		'portfolio',
		'react.js',
		'next.js',
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ko' className={`${pretend.variable} ${rale.variable}`}>
			<link rel='icon' type='image/png' href='img/favicon.png' />
			<body>{children}</body>
		</html>
	);
}
