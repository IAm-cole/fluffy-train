import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";

// const Contact = () => {
//
// };
const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-black    rounded-lg   flex flex-col md:items-center  items-center overflow-hidden w-full  "
    >
      <h1 className="text-xl   bg-slate-500 rounded-lg  mt-2   mx-auto  justify-items-center  md:text-2xl md:font-bold  text-gray-600  p-2 bg-gradient-to-r from-yellow-600 to-purple-400  ">
        Contact Me
      </h1>
      {/* <div className="  flex    "> */}
      <div className=" items-center   block     md:p-6   mt-2  md:flex md:justify-evenly w-full text-white   cursor-pointer     ">
        <div className="flex flex-col items-center justify-center   border rounded-lg bg-gradient-to-r from-slate-700 to-green-600 h-48 p-4">
          <FaPhone
            color="white"
            size={40}
            className="flex mx-auto  mb-2
          "
          />
          <h1 className="items-center text-2xl truncate ">+2349162594091</h1>
        </div>
        <div className="flex flex-col items-center justify-center   border rounded-lg  bg-gradient-to-r from-green-600 to-slate-700 text-black h-48 p-4  ">
          <MdOutlineEmail size={40} color="white" className="  " />
          <h1 className=" text-2xl md:text-xl text-center truncate  ">
            <a href="mailto:Ibitaumichael@gmail.com" className="text-white">
              Ibitaumichael@gmail.com
            </a>
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center    border rounded-lg bg-gradient-to-r from-slate-700 to-green-600 h-48 p-4">
          <CiLocationOn color="white" size={40} className="mb-2 mx-auto  " />
          <h1 className="items-center text-2xl truncate ">Lagos,Nigeria</h1>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
  //
};
export default Contact;
