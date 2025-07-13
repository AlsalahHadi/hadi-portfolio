'use client';

import Chip from '@/components/reusable/tabs/chip';
import { tabs } from '@/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ChipTabs = () => {
	const pathname = usePathname();
	return (
		<div className="flex items-center flex-wrap gap-2 mb-8">
			{tabs.map((tab, index) => (
				<Link href={tab.path} key={index}>
					<Chip text={tab.name} selected={pathname === tab.path} key={tab.name} />
				</Link>
			))}
		</div>
	);
};

export default ChipTabs;
