import { about } from '@/data';

const Footer = () => {
	return (
		<div className="text-center flex items-center justify-center flex-col mt-16 text-sm">
			<div>
				© {new Date().getFullYear()} - {about.name}
			</div>
		</div>
	);
};

export default Footer;
