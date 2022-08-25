import React from "react";
import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Container } from "./layout";

function Pricing() {
  return (
    <>
      <div className=" mt-24">
      <Container>
      <Pricing1>
        <div className="flex justify-center">
          <div>
            <div className="md:text-[40px] text-[35px] font-bold">Simple</div>
            <div className="md:text-[40px] text-[35px] font-bold md:-ml-28">
              All Inclusive Pricing
              <img className="md:ml-52 -mt-2" src="./line-img.png" alt="loading.."/>
            </div>
            <div> No contracts. No surprise fees.</div>
            <div className="flex mt-16">
              <div className="border rounded p-2 rounded-l-lg">
                monthly Plan
              </div>
              <div className="bg-blue-600 text-white p-2  rounded-r-lg">
                Annual Plan
              </div>
            </div>
          </div>
        </div>


        <div className="lg:flex justify-center gap-5 ">
          
          <div>
            <div className=" bg-slate-100  mt-10 rounded-lg p-10 py-14 ">
              
            <div>
              <div className="font-bold text-[20px]">Gold</div>
              <div>Perfect for small marketing teams</div>
            </div>

            <div className="flex gap-1">
              <div className="font-bold text-[45px]">$68</div>
              <div className="py-8">.99 / annually</div>
            </div>

            <hr className="lg:w-[400px] "/>
            <div className="mt-5 ">
              <div className="flex gap-5 hover:text-green-500 mt-2">
                
                <div>
                  
                  <AiOutlineCheckCircle className="mt-1" />
                </div>
                Course Discussions
              </div>
              <div className="flex gap-5 mt-2 hover:text-green-500">
                
                <div>
                  
                  <AiOutlineCheckCircle className="mt-1" />
                </div>
                Course Discussions
              </div>
              <div className="flex gap-5 mt-2 hover:text-green-500">
                
                <div>
                  
                  <AiOutlineCheckCircle className="mt-1" />
                </div>
                Course Discussions
              </div>
            </div>

            <div className="md:-ml-0 -ml-10">
              
              <button className="bg-blue-600 hover:shadow-2xl text-white p-4 md:px-7 md:ml-0 ml-10 rounded-lg mt-10">
                Get Started
              </button>
            </div>
            </div>
          </div>


         <div>
            <div className=" bg-slate-100 mt-10 rounded-lg">
            <div className="flex justify-end py-4 ">
              
              <button className="bg-pink-500 rounded   text-white ">
                Best Value
              </button>
            </div>
            <div className="p-10 ">
              <div>
                <div className="font-bold text-[20px]">Diamond</div>
                <div>Perfect for small marketing teams</div>
              </div>
              
              <div className="flex gap-1">
                <div className="font-bold text-[45px]">$98</div>
                <div className="py-8">.99 / annually</div>
              </div>

              <hr className="lg:w-[400px]"/>
              
              <div className="mt-5 ">
                <div className="flex gap-5  hover:text-green-500">
                  
                  <div>
                    
                    <AiOutlineCheckCircle className="mt-1" />
                  </div>
                  Course Discussions
                </div>
                <div className="flex gap-5  hover:text-green-500">
                  
                  <div>
                    
                    <AiOutlineCheckCircle className="mt-1" />
                  </div>
                  Course Discussions
                </div>
                <div className="flex gap-5  hover:text-green-500">
                  
                  <div>
                    
                    <AiOutlineCheckCircle className="mt-1" />
                  </div>
                  Course Discussions
                </div>
                <div className="flex gap-5  hover:text-green-500">
                  
                  <div>
                    
                    <AiOutlineCheckCircle className="mt-1" />
                  </div>
                  Course Discussions
                </div>
                <div className="flex gap-5  hover:text-green-500">
                  
                  <div>
                    
                    <AiOutlineCheckCircle className="mt-1" />
                  </div>
                  Course Discussions
                </div>
              </div>

              <div className="md:-ml-0 -ml-10">
                <button className="border bg-gray-200  hover:shadow-2xl p-4 md:px-7 md:ml-0 ml-10 rounded-lg mt-10">
                  Get Started
                </button>
              </div>

            </div>
            </div>
          </div>

        </div>
      </Pricing1>
      </Container>
      </div>
    </>
  );
}

export default Pricing;

const Pricing1 = styled.div`
  
`;
