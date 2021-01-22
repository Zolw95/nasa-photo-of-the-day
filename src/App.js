import React from "react";
import PhotosInfo from "./components/PhotosInfo";
import Popover from "./components/Popover";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import "./App.css";
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';


function App() {
  return (
      <div className="App">
        <Header />
        <PhotosInfo />
        <Footer />
      </div>
  );
} 
 
export default App;
