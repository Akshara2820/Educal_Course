import React from "react";
import { TbGridDots } from "react-icons/tb";
import { BsChevronDown } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
function Header() {
  return (
    <>
      <div className=" flex justify-between mt-10 font-semibold ">
        <div className="flex gap-5 m">
          <div>
            <img src="./educal-image.png" alt="loading..." />
          </div>

          <div className="md:block hidden">
            <div className="flex gap-5 ">
              <hr className="transform rotate-90  w-10 mt-4 "></hr>
              <div className="flex gap-2 m-auto hover:text-blue-600">
                <div>
                  <TbGridDots className="mt-1" />
                </div>
                <div className="">Category</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:block hidden">
          <div className="flex gap-10 ">
            <div className="flex gap-1 hover:underline">
              Home
              <div className="mt-1">
                <BsChevronDown />
              </div>
            </div>
            <div className="flex gap-1 hover:underline">
              Course
              <div className="mt-1">
                <BsChevronDown />
              </div>
            </div>
            <div className="flex gap-1 hover:underline">
              Blog
              <div className="mt-1">
                <BsChevronDown />
              </div>
            </div>
            <div className="flex gap-1 hover:underline">
              Pages
              <div className="mt-1">
                <BsChevronDown />
              </div>
            </div>
            <div className="flex gap-1 ">Contact </div>
          </div>
        </div>
        <div className="">
          <div className="flex gap-10">
            <div className="xl:block hidden ">
              <div className="flex items-center gap-3 border-none bg-white  rounded-lg p-3">
                <div className="px-2">
                  <IoSearch className="" />
                </div>
                <div>
                  <input
                    className="outline-0"
                    type="text"
                    placeholder="search..."
                  />
                </div>
                <hr className="w-4 transform rotate-90" />
                <div className="text-blue-800 text-[20px] w-12">
                  <FiShoppingCart className="" />
                  <div className="absolute bg-blue-600 text-white rounded-full px-2 -mt-7 ml-4">
                    2
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="px-5 py-3 bg-blue-600 rounded-lg text-white font-semibold">
                Try for Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
