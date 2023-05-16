import React from "react";
import {CiSearch} from 'react-icons/ci'
import Dummy_notes from "../assets/react-notes-starter-main/Dummy_notes"
import {BsPlusLg} from 'react-icons/bs'
import NoteItem from "../Components/NoteItem";
import { Link } from "react-router-dom";
import CreateNotes from "./CreateNotes";
export const Notes = () => {
  return (
  <section>
<header className="notes__header">
   <h2>My Notes</h2>
   {/* <input type="text"  autoFocus placeholder="Keyword..." /> */}
  <button className="btn"><CiSearch /></button>
</header>
<div className="notes__container">
 {Dummy_notes.map((note)=>(
<NoteItem key={note.id}  title={note.title} note={note} details={note.details}  date={note.date}/>
 ))}
</div>
<Link className="btn add__btn" to="/create-note"><BsPlusLg /></Link>
  </section>
  )
}


export default Notes;
