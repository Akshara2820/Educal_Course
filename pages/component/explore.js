import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Container } from "./layout";
const Items = [
  { icon: "0", tittle: "Data Science", sub: "Data is Everything" },
  { icon: "1", tittle: "Business", sub: "Improve your business" },
  { icon: "2", tittle: "Art & Design", sub: "Fun & Challenging" },
  { icon: "3", tittle: "LifeStyle", sub: "New Skills, New You" },
  { icon: "4", tittle: "Markting", sub: "Improve your business" },
  { icon: "5", tittle: "Finance", sub: "Fun & Challenging" },
  { icon: "6", tittle: "Health & Fitness", sub: "Invest to your Body" },
  { icon: "7", tittle: "Music", sub: "Major or Minor" },
  { icon: "8", tittle: "Academics", sub: "High Education Level" },
];
function Explore() {
  return (
    <>
      <div className="">
        <Container>
          <Explore1>
            <div className="">
              <div className="md:flex justify-between">
                <div className="font-bold md:text-[45px] text-[35px] z-1 ">
                  Explore
                  <br />
                   Our Popular Courses
                   <img className="line-img ml-20 sm:-mt-0 -mt-14" src="line-img.png" alt="loading" />
                 
                </div>
                <div className="mt-10 hover:text-blue-600 flex gap-2 ">
                  View All Category
                  <div className="mt-1">
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>

              <div className="md:grid grid-cols-3 gap-5 mt-10">
                {Items.map((item) => {
                  return (
                    <div key={item.tittle} className="">
                      <div className="border hover:shadow-xl rounded p-5 md:mt-0 mt-5 hover:text-white hover:bg-blue-600">
                        <div>
                          <div className="flex gap-5">
                            {item.icon}
                            <div>
                              <div className="font-bold text-[20px] ">
                                {item.tittle}
                              </div>
                              <div className="text-[16px] text-gray-500">{item.sub}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="md:flex gap-10 image-1 ">
                <div className="lg:flex sm:px-14 p-5 bg-gradient-to-r from-sky-100 to-blue-200 rounded-lg">
                  <div className="p-4">
                    <div className="bg-pink-600 rounded-full w-12 px-2 font-semibold text-white">
                      free
                    </div>
                    <div className=" text-[24px] font-bold hover:text-blue-600 py-4 ">
                      Germany Foundation Document
                    </div>
                    <div className="mt-4">
                      <button className="bg-blue-600 rounded hover:shadow-xl p-2 text-white font-semibold">
                        View Courses
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 md:block hidden">
                    <img src="explore1.png" alt="loading.." />
                  </div>
                </div>

                <div className="lg:flex md:mt-0 mt-5 sm:px-14 p-5 bg-gradient-to-r from-yellow-100 to-red-100 rounded-lg">
                  <div className="p-4">
                    <div className="bg-orange-600 rounded-full w-12 px-2 font-semibold text-white">
                      New
                    </div>
                    <div className=" text-[24px] font-bold hover:text-blue-600 py-4">
                      Online Courses From Eduka University
                    </div>
                    <div className="mt-4">
                      <button className="bg-blue-600 rounded hover:shadow-xl p-2 text-white font-semibold">
                        Find out More
                      </button>
                    </div>
                  </div>

                  <div className="md:block hidden">
                    <img src="explore2.png" alt="loading.." />
                  </div>
                </div>
              </div>
            </div>
          </Explore1>
        </Container>
      </div>
    </>
  );
}

export default Explore;

const Explore1 = styled.div`
  margin-top: 10rem;
  .line-img{
    transition-timing-function: ease;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  .image-1 {
    margin-top: 3rem;
  }
`;
