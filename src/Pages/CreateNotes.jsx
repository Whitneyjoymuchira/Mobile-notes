import React from "react";
import Notes from "./Notes";

const CreateNotes = ({ note, setNote, noteList, setNoteList }) => {
  const handleChange = (event) => {
    setNote(event.target.value);
  };
  console.log(note);

  const addToList=(e)=>{
    e.preventDefault()
    setNoteList([...noteList, note]);
        setNote("");
  }
  return (
    <form className="create-note__form">
      <input type="text" onChange={handleChange} />
      <button className="btn" onClick={addToList}>+</button>
{noteList}
    </form>

  );
};

export default CreateNotes;
