import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Createnotee = (props) => {
    const [note, setNote] = useState({
        title: '',
        content: '',
      });

      const[expand,setExpand]=useState(false)
      
      const InputEvent = (event) => {
        const { name, value } = event.target;
      
        setNote((prevData) => ({
          ...prevData,   // <-- This line is causing the error
          [name]: value,
        }));
      };
      
  const addEvent =()=>
  {
    props.passNote(note);
    setNote({
        title: '',
        content: '',
    });
    // pata kaise chlagea note ka data islite note pass kiya
  }
  const expandIt=()=>
  {
    setExpand(true);
  }
  const backNormal=()=>
  {
    setExpand(false);

  }

  return (
    <div className="main_note"    onDoubleClick={backNormal}>
      <form>
      {expand?
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={InputEvent}
          placeholder="Title"
          autoComplete="off"
        /> :null}
        <textarea
        style={{ height: "100px", resize: "none" }}
          rows=""
          columns=""
          name="content"
          value={note.content}
          onChange={InputEvent}
          placeholder="Write a note..."
          onClick={expandIt}
         
          
        />
        {expand ?
        <Button onClick={addEvent}>
          <AddIcon className="plus_sign" />
        </Button> :null}
      </form>
    </div>
  );
};

export default Createnotee;
