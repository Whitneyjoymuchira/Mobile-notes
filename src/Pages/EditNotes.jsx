import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import UseCreateTime from "../Components/UseCreateTime";
import { useNavigate } from "react-router-dom";

const EditNotes = ({ setNotes, notes }) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = UseCreateTime();
  const Navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNote = {
        id: uuid(),
        title: title,
        details: details,
        date: date,
      };

      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);
    }
    //navigate
    Navigate("/");
  };
  return (
    <section>
      <header className="create-note__header">
        <Link className="btn" link to="/">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleForm}>
          Save
        </button>
        <button className="btn danger">
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note__form">
        <input
          type="text"
          autoFocus
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Note Details"
          rows="30"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNotes;
