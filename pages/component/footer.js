import React from "react";
import styled from "styled-components";
import {AiOutlineArrowRight } from 'react-icons/ai'
import {FaFacebookF,FaPinterestP,FaTwitter} from 'react-icons/fa'
function Footer() {
  return (
    <>
      <Footer1>
        <div className="footer1 max-w-[1500px] text-white m-auto relative">
        <div className="flex justify-center">
          <div className="border bg-blue-600  mx-[20px] p-10 rounded absolute -top-24">
        
            <div className="md:flex justify-around gap-24">
              <div className="md:text-[40px] text-[30px] font-bold">
              <div>You Can be your Own</div>
              <div> Guiding star with our help</div>
              </div>
              
            
        <div className="md:mt-0 mt-4"> <button className="bg-white text-black rounded p-5 px-6">Get Started</button>

              </div>
            
            </div>
            
        </div>
       
        </div>



          <div className="md:grid lg:grid-cols-4 grid-cols-2  gap-5  py-40  md:mt-0 mt-60">
            <div className="py-5">
              <div><img src="./educal-footer.png" alt="loading..."/></div>
              <div className="py-10">
                Great lesson ideas and lesson plans for ESL
                teachers! Educators
                can customize lesson plans to best.
              </div>
              <div className="flex gap-3"> 
              <div className="bg-blue-900 rounded  p-3"> <FaFacebookF className="text-white"/></div> 
              <div className="bg-sky-400 rounded p-3"> <FaTwitter className="text-white"/></div> 
              <div className="bg-red-600 rounded p-3"> <FaPinterestP className="text-white"/></div>
              </div>
            </div>
            <div> 
            <div className="text-white font-bold text-[20px] py-5">Company</div>
              <div className="py-5">
              <div className="text-gray-400 hover:text-white">About</div>
              <div className="text-gray-400 hover:text-white mt-2">Course</div>
              <div className="text-gray-400 hover:text-white mt-2">Event</div>
              <div className="text-gray-400 hover:text-white mt-2">Instructor</div>
              <div className="text-gray-400 hover:text-white mt-2">Career</div>
              <div className="text-gray-400 hover:text-white mt-2">Become a Teacher</div>
              <div className="text-gray-400 hover:text-white mt-2">Contact</div>
              </div>
            </div>
            <div>
            <div className="text-white font-bold text-[20px] py-5">Platform</div>
              <div className="py-5 ">
                <div className="text-gray-400 hover:text-white">Browse Library</div>
                <div className="text-gray-400 hover:text-white mt-2">Library</div>
                <div className="text-gray-400 hover:text-white mt-2">Partners</div>
                <div className="text-gray-400 hover:text-white mt-2">News & Blogs</div>
                <div className="text-gray-400 hover:text-white mt-2">FAQs</div>
                <div className="text-gray-400 hover:text-white mt-2">Tutorials</div>
              </div>
            </div>
            <div className="">
              <div className="text-white font-bold text-[20px] py-5">Subscribe</div>
                <div className="">
                  <div className="flex py-5"> 
                    <input  className=" outline-0 text-black rounded-l-lg lg:p-4 p-2" placeholder="Your email address..." type='text'/>
                    <div><button className="bg-blue-500 p-4 rounded-r-lg hover:shadow-xl"><AiOutlineArrowRight className="text-[24px]" /></button></div>
                  </div>
                  <div className="py-5">Get the latest news and updates 
                  right at your inbox.
                  </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-white"/>
        <div className="max-w-[1500px] m-auto text-gray-400 md:flex justify-center"> © 2022 Educal, All Rights Reserved. Design By <spam className='text-white'>Lucknow Uttar Pradesh</spam> </div>
      </Footer1>
    </>
  );
}

export default Footer;

const Footer1 = styled.div`
.footer1{
  margin-top:15rem;
  padding:30px;
}
`;
