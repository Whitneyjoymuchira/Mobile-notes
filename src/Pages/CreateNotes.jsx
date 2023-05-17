import React, { useState } from "react";
import Notes from "./Notes";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { v4 as uuid } from "uuid";
import UseCreateTime from "../Components/UseCreateTime";


const CreateNotes = ({setNotes,notes}) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date=UseCreateTime()
  const Navigate=useNavigate()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      const note={
        id: uuid(),
        title: title,
        details: details,
        date:date
      };
      console.log(note);
       //add notes to notes array
       setNotes([note,...notes ]);
       //new method
      // setNotes(prevNotes=>([note,...prevNotes]))
    }
    //redirect to homepage-useNavigation
    Navigate('/')
  };
  return (
    <section>
      <header className="create-note__header">
        <Link className="btn" link to="/">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form className="create-note__form">
        <input
          type="text"
          autoFocus
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <textarea
          placeholder="Note Details"
          rows="30"
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          value={details}
        ></textarea>
      </form>
    </section>
   
  );
};

export default CreateNotes;
