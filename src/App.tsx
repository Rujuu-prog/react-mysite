import { Router } from "./router/Router";
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';

import { BlogType } from "./types/type";


export default function App() {
  const [blogs, setblogs] = useState<Array<BlogType>>([]);
  useEffect(() => {
    const FetchData = () => {
      axios.get<Array<BlogType>>(`http://localhost:8000/api/blog/`, {
          headers: {
              "Content-Type": "application/json",
          },}).then((res) => {
          console.log(res.data);
          setblogs(res.data);
      });
  };
    FetchData();
  }, [])
  return (
    <div className="App" >
      {blogs.map((blog: any) => 
        <Router key={blog.id} img={blog.img} text={blog.text} title={blog.title} />
      )}
    </div>
  );
}

