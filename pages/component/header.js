import React, { useState } from "react";
import { TbGridDots } from "react-icons/tb";
import { BsChevronDown } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";
import { Container } from "./layout";

function Header() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <div className="">
        <Container className="">
          <Header1 className="">
            <div className=" header__area header__transparent header__padding sticky undefined    ">
              <div className="flex justify-around gap-10 sm:p-10 p-5">
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
                    <div className="">
                      <div className="flex gap-1 hover:underline">
                        Home
                        <div className="mt-1">
                          <BsChevronDown className="" />
                        </div>
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
                      <div className="flex relative  ">
                        <div className="absolute px-2 py-1  text-[20px]">
                          <IoSearch className="" />
                        </div>
                        <input
                          type="text"
                          placeholder="search..."
                          className=" px-12 -mt-3  py-4 bg-white border shadow-sm  placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-blue-600 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                        <div className="absolute left-52  py-1 text-[20px]">
                          <FiShoppingCart className="" />
                          <div className="absolute bg-blue-600 text-white rounded-full px-2 -mt-7 ml-4 ">
                            2
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <button className="sm:block hidden -mt-3 px-5 py-3 bg-blue-600 rounded-lg text-white font-semibold">
                        Try for Free
                      </button>

                      <div className="">
                        <button
                          className="menu-bar text-blue-600 text-[40px] lg:hidden"
                          onClick={() => {
                            isMenu ? setIsMenu(false) : setIsMenu(true);
                          }}
                        >
                          <AiOutlineMenu />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Header1>

          {/**
      <div className={`${isMenu ? "" : "view_menu"} menu-bar bar`}>
      <div className="bar-menu">
        {menuItems.map((item, index) => (
          <div className="m-2" key={index}>
            <Link href={item.href}>
              <div className="slider">
                <div className="">{item.icon}</div>
                <div className=""> {item.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
     */}
        </Container>
      </div>
    </>
  );
}

export default Header;
const Header1 = styled.div`
  .header__area.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    background: #fff;
    z-index: 99;
    animation: fadeInDown 0.3s ease-in-out 0s 1 normal none running;
    -webkit-animation: fadeInDown 0.3s ease-in-out 0s 1 normal none running;
    display: block;
    box-shadow: 0 10px 20px 0 rgb(8 0 42 / 8%);
  }

  .header__transparent {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 11;
  }
`;
