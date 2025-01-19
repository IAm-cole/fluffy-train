/* eslist-disabled */

import { Data } from "../Data/Data";
import { useState } from "react";
import Modal from "../Modal/ModalCom";

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  const [openModalId, setOpenModalId] = useState(null);

  const handleOpen = (id) => {
    setOpen((prevState) => !prevState);
    setOpenModalId(id);
  };

  if (!Data) {
    return <div></div>;
  }

  return (
    <div
      id="portfolio"
      className="text-center bg-black mt-10     text-white w-full "
    >
      <h3 className="inline-flex  px-8 py-3 md:text-xl font-serif font-medium text-center mt-2  mb-4 bg-blue-700 hover:bg-blue-800 rounded-xl md:p-none md:m-0  cursor-pointer">
        Portfolio
      </h3>
      <div className="flex justify-center    flex-wrap md:mt-4 gap-2 md:gap-none  ">
        {Data.map((item) => (
          <div
            key={item.id}
            className="p-2 md:p-4  md:w-full  lg:w-1/4  text-xl text-nowrap    text-white border  rounded-xl  dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <h5 className="mb-2 text-xl md:text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
              {item.descriptions}
            </p>

            <button
              onClick={() => handleOpen(item.id)}
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Read more
            </button>
            {openModalId === item.id && (
              <Modal
                open={open}
                setOpen={setOpen}
                modalDes={item.modalDes}
              ></Modal>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
