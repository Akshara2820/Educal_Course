import React from "react";
import styled from "styled-components";
import Online from "./access_online";
import Course from "./course";
import Current_Event from "./current_event";
import Explore from "./explore";
import Footer from "./footer";
import Header from "./header";
import Pricing from "./pricing";

function Layout() {
  return (
    <div>
      <Layout1>
        <div className="layout">
          <Header />
          <Online />
          <Explore />
          <Course />
          <Current_Event />
          <Pricing />
          <Footer />
        </div>
      </Layout1>
    </div>
  );
}

export default Layout;

const Layout1 = styled.div`
.layout{
  max-width: 1500px;
  margin: auto;
  padding:30px;
 
}
`;
