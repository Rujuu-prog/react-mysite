import { Router } from "./router/Router";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}
