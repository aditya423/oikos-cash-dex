import './App.css';
import Navbar from './My Components/Navbar';
import Text from './My Components/Text';
import Slider from './My Components/Slider';
import Wallet from './My Components/Wallet';
import MobileTablet from './My Components/MobileTablet';
import {BrowserView,MobileView} from 'react-device-detect';
import { LanguageDropdown } from './My Components/Dropdown';

import Header from './My Components/Header';
import Network from './My Components/Network';
import { BrowserRouter as Router } from 'react-router-dom';

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import BscBody from "./My Components/BscBody";
import NavbarComponent from "./My Components/NavbarComponent";
import Footer from "./My Components/Footer";


function App() {
    return (
        <>
          <NavbarComponent />
          <BscBody />
          <Footer />

          <Header></Header>
          <Network></Network>

          <div className="main">
            <BrowserView>
              <Router>
                <Text />
                <div className="box">
                  <Navbar /> 
                  <LanguageDropdown />
                  <div className="box2">
                    <Slider />
                  </div>
                </div> 
                <div className="box3">
                  <Wallet />      
                </div>    
              </Router>
            </BrowserView> 
          </div>
        
          <MobileView>
            <MobileTablet />
          </MobileView>
    
    </>
    );
}

export default App;