const useShowFramer = () => {
	const parent: {
		hidden: {
			opacity: number;
		};
		visible: {
			opacity: number;
			transition: {
				when: string;
				staggerChildren: number;
			};
		};
	} = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.2,
			},
		},
	};

	const item: {
		hidden: {
			opacity: number;
			y: number;
		};
		visible: {
			opacity: number;
			y: number;
		};
	} = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return { parent, item };
};

export default useShowFramer;
