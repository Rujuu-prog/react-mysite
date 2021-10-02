import { Router } from "./router/Router";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import { BlogType } from "./types/type";

export default function App() {
  // const [blogs, setblogs] = useState<Array<BlogType>>([]);
  // useEffect(() => {
  //   const onClickFetchData = () => {
  //     axios.get<Array<BlogType>>(`http://localhost:8000/api/blog/`, {
  //         headers: {
  //             "Content-Type": "application/json",
  //         },}).then((res) => {
  //         console.log(res.data);
  //         setblogs(res.data);
  //     });
  // };
  // onClickFetchData();
  // }, [])

  return (
    <div className="App">
      <Router />
    </div>
  );
}
