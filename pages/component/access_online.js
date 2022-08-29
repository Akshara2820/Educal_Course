import React from "react";
import styled from "styled-components";
import Header from "./header";
import { Container } from "./layout";
function Online() {
  return (
    <>
      <div className="mt-24">
        <Container>
          <Online1>
          <div className="">
          <div className="">
            <img
              className=" hero-image md:-ml-44 absolute -z-10 "
              src="./hero-image.png"
              alt="loading..."
            />
          </div>

          <div className="lg:flex justify-center -mt-24">
            <div className="mt-6">
              <div className="md:text-[45px] text-[35px]">Access 2700+</div>
              <div className="md:text-[55px] text-[35px] font-bold">
                Online Tutorial Form <img className="-mt-5" src="./line-img.png" alt="loading.."/>
                Top Instructor.
              </div>
              <div className="md:text-[20px]">
                Meet university,and cultural institutions, who'll <br />
                share their experience.
              </div>
              <div className="md:py-10 py-5">
                <button className="bg-blue-600 text-white font-semibold rounded p-4 hover:shadow-xl">
                  View all Course
                </button>
              </div>
            </div>

            <div className="lg:flex md:px-20  ">
              <div className="md:w-96 w-60">
                <div className="circle-img">
                  <img
                    className=" md:ml-80 -z-10"
                    src="./circle.png"
                  />
                </div>

               <div className="main-img">
               <img
               className="relative -mt-24 rounded-tl-3xl rounded-br-3xl"
               src="./img-access.jpg"
               alt="loading..."
                />
               </div>

                <div className="animate-bounce bg-white rounded-lg md:ml-72 p-4 absolute z-1 md:-mt-24 "> 
                  <div>Tomorrow is our</div> 
                  <div className="font-semibold">"When I Grow Up"Spirit Day!</div>
                </div>
               
                <div className="retative dot-img md:block hidden ">
                  <img
                    className="hero-image -z-10"
                    src="./access-img3.png"
                    alt="loading..."
                  />
                </div>

                <div className="circle-outline">
                  <img
                    className=" lg:bottom-20 md:-mt-96 lg:ml-52 -z-10  -mt-40 sm:w-96 w-64"
                    src="./cercle-outline.png"
                  />
                </div>
                
              </div>
              <div className="main2-img  mt-24 px-10 lg:block hidden">
                <img 
                  className=" img2 w-60  mt-8"
                  src="./img2-access.jpg"
                  alt="loading..."
                />
              </div>

            </div>

          </div>
        </div>
          </Online1>
        </Container>
      </div>
    </>
  );
}

export default Online;

const Online1 = styled.div`
  margin-top: 10rem;
  .img2 {
    border-radius: 0px 45px 0px 45px;
  }

  .hero-image {
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
    animation: rotation 5s infinite linear;
  }
`;
