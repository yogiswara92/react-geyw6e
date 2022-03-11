import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import List from "./List";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // Async (Promise)
  // Sync (Ga Promise)

  // const fetchVersi1 = () => {
  //   // Promise
  //   setTimeout(() => {
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then((respon) => {
  //         return respon.json();
  //       })
  //       .then((data) => {
  //         const lastFivePost = data.splice(0, 5);

  //         console.log('versi 1', lastFivePost);
  //       });
  //   }, 1000);
  // };

  // const fetchVersi2 = async () => {
  //   const respon = await fetch('https://jsonplaceholder.typicode.com/posts');

  //   const data = await respon.json();

  //   const lastFivePost = data.splice(0, 5);

  //   console.log('versi 2', lastFivePost);
  // };

  // const fetchDenganAxios = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
  //     console.log(response.data);
  //   });
  // };

  const fetchAxiosAyncAwait = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const res = await axios.get(url);

    setPosts(res.data);

    console.log(res.data);
  };

  useEffect(() => {
    // ketika hit api, balikannya itu Promise
    // Promise then
    // Asyncronous
    // fetchVersi1();
    // fetchVersi2();
    // fetchDenganAxios();
    setTimeout(() => {
      fetchAxiosAyncAwait();
      setIsLoading(false);
    },2000)
  }, []);

  return (
    <div>
      <header>
        <h1>MyBlog</h1>
      </header>
        <p>Welcome to my Blog</p>
      {isLoading ? (
        <div>🔃 Loading... </div>
      ) : (
        <List data={posts} />
      )}
    </div>
  );
}