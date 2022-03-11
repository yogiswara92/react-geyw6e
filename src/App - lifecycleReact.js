import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // componentDidMount
  useEffect(() => {
    console.log('fase componentDidMount');
    setTimeout(() => {
      setSearch('dari api');
      setIsLoading(false);
    }, 2000);
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log('re-render karna count berubah');
  }, [count]);

  useEffect(() => {
    if (search.length === 0) return;

    console.log('re-render karna search berubah');
    // setCount(count + 1);
  }, [search]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  console.log('fase render');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <input onChange={handleChange} type="text" value={search} />

          <button onClick={handleClick}>{count} clicked!</button>
        </>
      )}
    </div>
  );
}