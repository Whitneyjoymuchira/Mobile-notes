import React from "react";
import Notes from "./Notes";
import { Link } from "react-router-dom";
import {IoIosArrowBack} from 'react-icons/io'

const CreateNotes = ({ note, setNote, noteList, setNoteList }) => {
  return(
<section>
<header className="create-note__header">
  <Link className="btn" link to ="/">
  <IoIosArrowBack/>
  </Link>
  <button className="btn lg primary">Save</button>
</header>
<form className="create-note__form">
<input type="text" autoFocus placeholder="Title" />
<textarea placeholder="Note Details" rows="30"></textarea>
</form>
</section>
  ) 
//   const handleChange = (event) => {
//     setNote(event.target.value);
//   };
//   console.log(note);

//   const addToList=(e)=>{
//     e.preventDefault()
//     setNoteList([...noteList, note]);
//         setNote("");
//   }
//   return (
//     <form className="create-note__form">
//       <input type="text" onChange={handleChange} />
//       <button className="btn" onClick={addToList}>+</button>
// {noteList}
//     </form>


  ;
};

export default CreateNotes;
