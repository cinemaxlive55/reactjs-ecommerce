import React, { useState } from 'react';

export default function SearchBox(props) {
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form className="search1" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search Essentials, Brands..."
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
        ></input>
    </form>
  );
}



// WEBPACK FOOTER //
// ./src/components/SearchBox1.js