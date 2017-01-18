import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import SubHeader from "../containers/SubHeaderContainer";
import ContainerResult from "../containers/ContainerResult";

import Flexbox from 'flexbox-react';
require("../src/style.css");
// import Footer from "../containers/FooterContainer";


// Build App structure

const App = () => (
  <Flexbox flexDirection="column" id="app-container">
      <Header />
      <SubHeader />
      <ContainerResult />
  </Flexbox>    
);

export default App
