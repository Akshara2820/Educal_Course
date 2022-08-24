import React from "react";
import styled from "styled-components";

function Pricing() {
  return (
    <>
      <Pricing1>
      <div className="flex justify-center">
        <div>
          <div className="md:text-[40px] text-[35px] font-bold">Simple</div>
          <div className="md:text-[40px] text-[35px] font-bold md:-ml-28"> All Inclusive Pricing</div>
          <div> No contracts. No surprise fees.</div> 
          <div className="flex mt-16"> 
            <div className="border rounded p-2 rounded-l-lg">monthly Plan</div> 
            <div className="bg-blue-600 text-white p-2  rounded-r-lg">Annual Plan</div>
          </div>
        </div>
      </div>
      <div></div>
      </Pricing1>
    </>
  );
}

export default Pricing;

const Pricing1 = styled.div`
margin-top:10rem;
`