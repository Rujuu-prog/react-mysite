import React from 'react';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Router } from "./router/Router";
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { Github } from './components/atoms/icon/Github';
import { Instagram } from './components/atoms/icon/Instagram';
import { Twitter } from './components/atoms/icon/Twitter';
import { IconList } from './components/molecules/IconList';
import { Top } from './components/pages/Top';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { HeaderOnly } from './components/templates/HeaderOnly';



export default function App() {
  return (
    <div className="App" >
      <Router />
    </div>
  );
}

