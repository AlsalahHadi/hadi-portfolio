import { MotionDiv } from '@/components/framer';
import { projects } from '@/data';

export const Projects = () => {
  return (
    <div className="mt-12">
      <h1 className="font-semibold text-gray-900 mb-4 text-lg">Projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-x-10 gap-y-5">
        {projects.map((project, index) => {
          return (
            <MotionDiv
              key={String(index)}
              className="mt-5"
              whileHover={{
                y: -8,
              }}
              transition={{
                type: 'spring',
                bounce: 0.7,
              }}>
              <div>
                <div className="text-sm mb-1 font-medium text-gray-900">
                  {project.name}
                </div>
                <div className="max-w-xs text-sm font-normal text-gray-500 text-justify">
                  {project.description}
                </div>
              </div>
            </MotionDiv>
          );
        })}
      </div>
    </div>
  );
};
