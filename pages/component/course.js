import React from "react";
import styled from "styled-components";
import { FiBook } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Container } from "./layout";

const Items = [
  {
    image: "./course-1.jpg",
    tittle: "Become a product Manager learn the skills & job.",
    price: "$21.00",
    details: "know Details",
    icon: <FiBook />,
    lesson: "43Lesson",
    star: "&#9733;",
    rate: "45 (37)",
    clip_img: "./cource_clip.jpg",
    clip_name: "Jim Sechen",
    sub_tittle:'Art & Design'
  },
  {
    image: "./course-2.jpg",
    tittle: "Become a product Manager learn the skills & job.",
    price: "$21.00",
    details: "know Details",
    icon: <FiBook />,
    lesson: "43Lesson",
    star: "&#9733;",
    rate: "45 (37)",
    clip_img: "./cource_clip.jpg",
    clip_name: "Jim Sechen",
    sub_tittle:'UX Design'
  },
  {
    image: "./course-3.jpg",
    tittle: "Become a product Manager learn the skills & job.",
    price: "$21.00",
    details: "know Details",
    icon: <FiBook />,
    lesson: "43Lesson",
    star: "&#9733;",
    rate: "45 (37)",
    clip_img: "./cource_clip.jpg",
    clip_name: "Jim Sechen",
    sub_tittle:'Development'
  },
  {
    image: "./course-4.jpg",
    tittle: "Become a product Manager learn the skills & job.",
    price: "$21.00",
    details: "know Details",
    icon: <FiBook />,
    lesson: "43Lesson",
    star: "&#9733;",
    rate: "45 (37)",
    clip_img: "./cource_clip.jpg",
    clip_name: "Jim Sechen",
    sub_tittle:'Development'
  },
  {
    image: "./course-5.jpg",
    tittle: "Become a product Manager learn the skills & job.",
    price: "$21.00",
    details: "know Details",
    icon: <FiBook />,
    lesson: "43Lesson",
    star: "&#9733;",
    rate: "45 (37)",
    clip_img: "./cource_clip.jpg",
    clip_name: "Jim Sechen",
    sub_tittle:'Marketing'
  },
  {
    image: "./course-6.jpg",
    tittle: "Become a product Manager learn the skills & job.",
    price: "$21.00",
    details: "know Details",
    icon: <FiBook />,
    lesson: "43Lesson",
    star: "&#9733;",
    rate: "45 (37)",
    clip_img: "./cource_clip.jpg",
    clip_name: "Jim Sechen",
    sub_tittle:'Data Science'
    
  },
];

function Course() {
  return (
    <>
     <div className="bg-gray-100 mt-24 " >
     <Container>
     <Course1>
     <div>
       <div className="md:text-[45px] text-[35px] font-bold">
         Find The Right <br />
         Online Course for you
         <img className="sm:ml-32 sm:-mt-4 -mt-16 ml-24" src="./line-img.png" alt="loading"/>
       </div>
       <div className="md:flex justify-between md:py-0 py-5 sm:mt-4 mt-14">
         <div>
           You don't have to struggle alone, you've got our assistance and
           help.
         </div>
         <div className="flex flex-wrap gap-5 md:mt-0 sm:mt-5 mt-10 font-semibold">
         <div>  
         <div className="bg-blue-600 text-white font-semibold rounded-lg shadow-xl px-2 -mt-6">New</div>
          <div className="text-blue-600 font-semibold">See All</div>
         
         </div>
           <div className="hover:text-blue-600 ">Trending</div>
           <div className="hover:text-blue-600">Popularity</div>
           <div className="hover:text-blue-600">Featured</div>
           <div className="hover:text-blue-600">Art & Design</div>
         </div>
       </div>
       <div className="md:grid grid-cols-3 gap-5 py-10 ">
         {Items.map((item) => {
           return (
             <div key={item.tittle}>
               <div className=" rounded md:mt-0 mt-5 shadow-xl">
                 <div className="overflow-hidden relative">
                   <img
                     className="image grow object-cover -z-10"
                     src={item.image}
                     alt="loading..."
                     style={{ width: "100%" }}
                   />
                   <div className="bg-pink-600 rounded-lg text-white px-2 absolute top-6 ml-2">{item.sub_tittle}</div>
                 </div>
                 <div className="p-10">
                   <div className="flex  justify-between ">
                     <div className="flex gap-2">
                       <div className="mt-1">{item.icon}</div>
                       <div> {item.lesson}</div>
                     </div>
                     <div className="flex gap-2">
                       <div className="text-yellow-400 text-[20px] -mt-1">
                         &#9733;
                       </div>
                       <div> {item.rate}</div>
                     </div>
                   </div>

                   <div className="font-bold text-[24px] hover:text-blue-600">
                     {item.tittle}
                   </div>
                   <div className="flex gap-5 py-5">
                     <div className="">
                       <img
                         className="rounded-full"
                         src={item.clip_img}
                         alt="loading..."
                       />
                     </div>
                     <div> {item.clip_name}</div>
                   </div>
                   <hr className="w-full" />
                   <div className="flex gap-2 justify-between mt-5">
                     <div className="text-pink-600 font-bold text-[20px]">{item.price}</div>
                     <div className="flex  hover:text-blue-600">
                       <div>{item.details}</div>
                       <div>
                         <AiOutlineArrowRight className="mt-1"/>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           );
         })}
       </div>
     </div>
   </Course1>
     </Container>
     </div>
    </>
  );
}

export default Course;
const Course1 = styled.div`
 
  .image {
    &.grow {
      transition: all 0.3s ease-in-out;
      &:hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
  }
`;
