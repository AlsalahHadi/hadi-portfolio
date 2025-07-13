'use client';

import { motion } from 'framer-motion';

const Chip = ({ text, selected }) => {
	return (
		<button className={`${selected ? 'text-white' : 'text-gray-500 hover:text-gray-900'} text-sm transition-colors px-2 py-1 rounded-md relative`}>
			<span className="relative z-10">{text}</span>
			{selected && <motion.span layoutId="pill-tab" transition={{ type: 'spring', duration: 0.5 }} className="absolute inset-0 z-0 bg-gray-900 rounded-md"></motion.span>}
		</button>
	);
};

export default Chip;
