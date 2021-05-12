import React from 'react';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
// import { Router } from "./router/Router";
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { TestButton } from './components/atoms/button/TestButton';
import { Github } from './components/atoms/icon/Github';
import { Instagram } from './components/atoms/icon/Instagram';
import { Twitter } from './components/atoms/icon/Twitter';
import { IconList } from './components/molecules/IconList';
import { HeaderOnly } from './components/templates/HeaderOnly';



export default function App() {
  return (
    // <BrowserRouter>
      <div className="App" >
        <HeaderOnly/>
        <TestButton/>
      </div>
    // </BrowserRouter>
  );
}

