import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Dummy_notes from "../assets/react-notes-starter-main/Dummy_notes";
import { BsPlusLg } from "react-icons/bs";
import NoteItem from "../Components/NoteItem";
import { Link } from "react-router-dom";
import CreateNotes from "./CreateNotes";
const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = (e) => {
    setFilteredNotes(notes.filter(note=>{
      if( note.title.toLowerCase().includes(text.toLowerCase())){
return note
      }
    }))
  }
  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            autoFocus
            placeholder="Keyword..."
            onChange={(e) => {
              setText(e.target.value) ;handleSearch();
            }}
          />
        )}
        <button
      
          className="btn"
          onClick={(e) => {
            setShowSearch(!showSearch);
          }}
        >
          <CiSearch  />
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            title={note.title}
            note={note}
            details={note.details}
            date={note.date}
          />
        ))}
      </div>
      <Link className="btn add__btn" to="/create-note">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
