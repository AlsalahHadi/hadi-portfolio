import { educations } from '@/data';

export const Education = () => {
  return (
    <div className="mt-12">
      <h1 className="font-semibold text-gray-900 mb-4 text-lg">Education</h1>
      <ol className="relative border-s border-gray-200">
        {educations.map((item, index) => {
          return (
            <li key={String(index)} className="mb-10 ms-4">
              <div className="text-md font-medium text-gray-900">
                {item.degree}
              </div>
              <div className="mb-4 text-sm font-normal text-gray-500">
                {item.school}
              </div>
              <div className="mb-4 text-sm font-normal text-gray-900 text-justify">
                {item.courses.map((course, index) => {
                  return <div key={String(index)}>{`- ${course}`}</div>;
                })}
              </div>
              <div className="mb-4 text-xs font-normal text-gray-500">
                {item.date}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
