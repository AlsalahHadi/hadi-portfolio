import { expreriences } from '@/data';

export const Experience = () => {
  return (
    <div className="mt-12">
      <h1 className="font-semibold text-gray-900 mb-4 text-lg">Experience</h1>
      <ol className="relative border-s border-gray-200">
        {expreriences.map((item, index) => {
          if (item.is_current) {
            return (
              <li key={String(index)} className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border "></div>

                <div className="flex flex-row items-center gap-2">
                  <div className="text-md font-medium text-gray-900">
                    {item.role}
                  </div>
                  <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
                    present
                  </div>
                </div>
                <div className="mb-4 text-sm font-normal text-gray-500">
                  {item.company}
                </div>
                <div className="mb-4 text-sm font-normal text-gray-900 text-justify">
                  {item.description}
                </div>
                <div className="mb-4 text-xs font-normal text-gray-500">
                  {item.date}
                </div>
              </li>
            );
          }
          return (
            <li key={String(index)} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>

              <div className="text-md font-medium text-gray-900">
                {item.role}
              </div>
              <div className="mb-4 text-sm font-normal text-gray-500">
                {item.company}
              </div>
              <div className="mb-4 text-sm font-normal text-gray-900 text-justify">
                {item.description}
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
