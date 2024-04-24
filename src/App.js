import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import './index.css';
import Createnotee from "./Createnotee";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => [...prevData, note]);
  };

  const onDelete = (id) => {
    setAddItem((prevData) =>
      prevData.filter((_, index) => index !== id)
    );
  };

  return (
    <>
      <Header />
      <Footer />
      <Createnotee passNote={addNote} />
      {addItem.map((val, index) => (
        <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
      ))}
    </>
  );
}

export default App;
