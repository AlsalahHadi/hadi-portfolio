import { about } from '@/data';

export const About = () => {
  return (
    <div>
      <p className="text-gray-500 text-justify">{about.description}</p>
    </div>
  );
};
