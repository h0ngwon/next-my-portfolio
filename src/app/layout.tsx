export const metadata = {
	title: 'Won\'s portfolio site',
	description: 'Won\'s portfolio site',
    keywords: ["포트폴리오", "리액트", "넥스트", "portfolio", "react.js", "next.js"]
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ko'>
            <link rel='icon' type='image/png' href='img/favicon.png'/>
			<body>{children}</body>
		</html>
	);
}
