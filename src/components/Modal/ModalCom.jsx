/*eslint-disable */
import { Data } from "../Data/Data";
export default function ModalCom({ children, open, setOpen, modalDes }) {
  return (
    <div
      onClick={() => setOpen(false)}
      className={` cursor-pointer overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div className="w-3/4 h-full flex justify-center items-center">
        <div className="relative   w-1/2   overflow-hidden flex flex-col rounded-2xl    ">
          <div className="relative rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between p-4 md:p-5 border-b dark:border-gray-400">
              <h3 className="text-lg  md:text-xl font-semibold font-serif text-gray-400 dark:text-white">
                {modalDes.title}
              </h3>
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 md:p-10 tracking-tight dark:bg-gray-700 font-serif text-white  whitespace-normal text-justify ">
              <p className="  md:text-xl text-base md:text-gray-100  justify-start">
                {modalDes.content}
              </p>
              <button className="py-2 px-4 bg-blue-700 text-white text-base md:text-lg rounded-lg mt-4">
                Visit Page
              </button>
            </div>
            <div className="bg-white text-black">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
