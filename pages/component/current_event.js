import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
const Items = [
  {
    date: "Jun 14,2022",
    time: "12:00am - 2:30pm",
    place: "New York",
    title: "Digital transformation conference",
    view: "view more",
  },
  {
    date: "Jun 14,2022",
    time: "12:00am - 2:30pm",
    place: "New York",
    title: "World education day conference",
    view: "view more",
  },
  {
    date: "Jun 14,2022",
    time: "12:00am - 2:30pm",
    place: "New York",
    title: "Foundations of global health",
    view: "view more",
  },
  {
    date: "Jun 14,2022",
    time: "12:00am - 2:30pm",
    place: "New York",
    title: "Business creativity workshops",
    view: "view more",
  },
];

function Current_Event() {
  return (
    <>
      <Current_Event1>
        <div className="flex justify-center ">
          <div className="">
            <div className="text-[40px] font-bold">Current Event</div>
            <div className="">We found 13 events available for you.</div>
          </div>
        </div>
        <div>
          {Items.map((item) => {
            return (
              <div key={item.title} className="flex justify-center">
                <div className="rounded mt-10 p-10 shadow-xl w-[800px] ">
                  <div className="flex flex-wrap md:gap-5">
                    <div>{item.date}</div>
                    <hr className="md:block hidden transform rotate-90 w-4" />
                    <div> {item.time} </div>
                    <hr className="w-4 md:block hidden transform rotate-90" />
                    <div>{item.place}</div>
                  </div>

                  <div className="md:flex gap-10 justify-between mt-2">
                    <div className="md:text-[30px] text-[25px] font-semibold hover:text-blue-600">
                      {item.title}
                    </div>
                    <div className="flex gap-2">
                      <div>{item.view}</div>
                      <div>
                        <AiOutlineArrowRight className="mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Current_Event1>
    </>
  );
}

export default Current_Event;

const Current_Event1 = styled.div`
  margin-top: 10rem;
`;
