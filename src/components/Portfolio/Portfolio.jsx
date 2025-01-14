/*eslint-disabled*/
/* eslist-disable */

import { Data } from "../Data/Data";

export default function Portfolio() {
  if (!Data) {
    return <div></div>;
  }

  return (
    <div
      id="portfolio"
      className="text-center bg-black md:mt-6     text-white w-full "
    >
      <h3 className="inline-flex  px-8 py-3 md:text-xl font-serif font-medium text-center mt-4  mb-4 bg-blue-700 hover:bg-blue-800 rounded-xl md:p-none md:m-0  cursor-pointer">
        Portfolio
      </h3>
      <div className="flex justify-center bg-black  flex-wrap md:mt-4 gap-2 md:gap-2  ">
        {Data.map((item, index) => (
          <div
            key={index}
            className="p-2 md:p-4  md:w-full  lg:w-1/4  text-xl text-nowrap  bg-white border    md:rounded-md lg:m-5 dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
              {item.descriptions}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
