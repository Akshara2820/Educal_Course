import React, { useEffect, useState } from "react";
import { TbGridDots } from "react-icons/tb";
import { BsChevronDown } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";
import { Container } from "./layout";

function Header(props) {
  const [isMenu, setIsMenu] = useState(false);

  const menuItems = [
    {
      title: "Home",
    },
    {
      title: "Course",
    },
    {
      title: "Blog",
    },
    {
      title: "Pages",
    },
    {
      title: "Contact",
    },
  ];

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

                      <div className="navbar -ml-10 lg:block hidden">
                        <ul className="navbar-links">
                          <div>
                            <TbGridDots className="mt-1" />
                          </div>
                          <li className="-mt-5 navbar-dropdown flex">
                            <a> Category</a>
                            <div className="dropdown">
                              <a>English</a>
                              <a>Web Development</a>
                              <a>Logo Design</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="navbar lg:block hidden">
                  <ul className="navbar-links">
                    <li className="-mt-5 navbar-dropdown">
                      <a> Home</a>
                      <div className="dropdown">
                        <a>Home style1</a>
                        <a>Home style2</a>
                        <a>Home style3</a>
                        <a>Home style4</a>
                      </div>
                    </li>
                    <li className="-mt-5 navbar-dropdown">
                      <a>Course</a>
                      <div className="dropdown">
                        <a>Course</a>
                        <a>Course List </a>
                        <a>Course SideBar </a>
                      </div>
                    </li>
                    <li className=" -mt-5 navbar-dropdown">
                      <a> Blogs</a>
                      <div className="dropdown">
                        <a>Blog</a>
                        <a>Blog Details</a>
                      </div>
                    </li>

                    <li className=" -mt-5 navbar-dropdown">
                      <a>Pages</a>
                      <div className="dropdown">
                        <a>Sign Up</a>
                        <a>Error</a>
                        <a>Event Details</a>
                        <a>My Cart</a>
                      </div>
                    </li>
                    <li className="-mt-5 navbar-dropdown">
                      <a>Contact</a>
                    </li>
                  </ul>
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
                          className="menu-bar"
                          onClick={() => setIsMenu(true)}
                        >
                          <div>
                            <AiOutlineMenu className="text-blue-600 text-[32px] -mt-8" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Header1>

          <div className={`${isMenu ? "menu-view" : "view_menu"} menu-bar bar`}>
            <div className="flex justify-between p-5">

              <div>
                <img src="./educal-image.png" alt="loading..." />
              </div>

              <div onClick={() => setIsMenu(false)}>
                <AiOutlineCloseCircle className="text-[40px] text-blue-600 -mt-1" />
              </div>

            </div>
            <div className="bar-menu">
              {menuItems.map((item, index) => (
                <div className="m-2" key={index}>
                  <div className="slider">
                    <div className=""> {item.title}</div>
                  </div>
                </div>
              ))}
            </div>
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
  .navbar {
    align-items: center;
    position: relative;
    padding: 0px 70px;
    background-color: #fff;
    cursor:pointer;
  }

  .navbar-links {
    list-style-type: none;
    display: flex;
  }
  .navbar-links li a {
    display: block;
    text-decoration: none;
    color: #444;
    padding: 20px 20px;
    font-weight: 700;
    transition: 0.4s all;
  }

  .navbar-links li.navbar-dropdown {
    position: relative;
  }

  .navbar-links li.navbar-dropdown:hover .dropdown {
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
  }

  .navbar-links li.navbar-dropdown .dropdown {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    padding: 20px 0;
    top: 100%;
    transform: translateY(50px);
    left: 0;
    width: 250px;
    background-color: #fff;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    z-index: 111;
    transition: 0.4s all;
  }
  .navbar-links li.navbar-dropdown .dropdown a {
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: 400;
  }
  .navbar-dropdown .dropdown a:hover {
    padding-left: 30px;
    background-color: #5634ff;
    color: white;
  }
  .navbar-links li a:hover {
    color: #5634ff;
  }

  
}
`;
