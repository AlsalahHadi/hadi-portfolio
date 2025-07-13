import { skills } from '@/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills',
  description: `My Skills and Tools I use in my day-to-day life.`,
};

export default function Skills() {
  const sectionKeys = Object.keys(skills);
  return (
    <>
      <p className="text-gray-500">
        Here are some of the tools and technologies I use in my day-to-day life.
      </p>
      {sectionKeys.map(sectionKey => (
        <div key={sectionKey}>
          <h1 className="capitalize font-semibold text-lg mt-5">
            {sectionKey}
          </h1>
          <ul className="list-disc text-gray-400 ml-5">
            {[...(skills?.[sectionKey] ?? [])].map(item => (
              <li key={item.name} className="space-x-1 my-3">
                <span className="font-medium text-sm text-gray-900">
                  {item.name}
                </span>{' '}
                {!!item.description && (
                  <>
                    <span>-</span>
                    <span className="text-sm text-gray-500">
                      {item.description}
                    </span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
