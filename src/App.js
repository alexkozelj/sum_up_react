import React from "react";
import * as Styled from "./App.styled.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header/Header";
import Content from "./components/Content/Content.js";
import Footer from "./components/Footer/Footer";

const App = () => {
   return (
      <Styled.App className="App">
         <Header></Header>
         <Content></Content>
         <Footer></Footer>
      </Styled.App>
   );
};

export default App;
