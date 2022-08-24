import React from "react";
import styled from "styled-components";
function Online() {
  return (
    <>
      <Online1>
        <div className="">
          <div>
            <img
              className=" hero-image "
              src="./hero-image.png"
              alt="loading..."
            />
          </div>
          <div className="lg:flex justify-center">
            <div>
              <div className="md:text-[45px] text-[35px]">Access 2700+</div>
              <div className="md:text-[50px] text-[35px] font-bold">
                Online Tutorial Form <br />
                Top Instructor.
              </div>
              <div className="md:text-[20px]">
                Meet university,and cultural institutions, who'll <br />
                share their experience.
              </div>
              <div className="md:py-10 py-5">
                <button className="bg-blue-600 text-white font-semibold rounded p-4 ">
                  View all Course
                </button>
              </div>
            </div>
            <div className="lg:flex md:px-20 mt-10 ">
              <div className="md:w-96 w-60">
                <div>
                  <img
                    className=" absolute md:-mt-20 -mt-10 md:ml-80 -z-10"
                    src="./circle.png"
                  />
                </div>
                <img
                  className=" rounded-tl-3xl rounded-br-3xl"
                  src="./img-access.jpg"
                  alt="loading..."
                />
                <div className="bg-white rounded-lg md:ml-72 p-4 absolute z-1 md:-mt-24 "> 
                  <div>Tomorrow is our</div> 
                  <div className="font-semibold">"When I Grow Up"Spirit Day!</div>
                </div>
               
                <div className="md:block hidden">
                  <img
                    className="absolute -z-10 "
                    src="./access-img3.png"
                    alt="loading..."
                  />
                </div>
                <div>
                  <img
                    className=" absolute lg:bottom-20 md:-mt-40 lg:ml-52 -z-10  -mt-40 sm:w-96 w-64"
                    src="./cercle-outline.png"
                  />
                </div>
                
              </div>
              <div className="px-10 lg:block hidden">
                <img
                  className="w-60  rounded-bl-3xl rounded-tr-3xl mt-8"
                  src="./img2-access.jpg"
                  alt="loading..."
                />
              </div>
            </div>
          </div>
        </div>
      </Online1>
    </>
  );
}

export default Online;

const Online1 = styled.div`
  margin-top: 10rem;
  .hero-image {
   
  }
`;
