import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const EditNotes = () => {
  return (
    <section>
      <header className="create-note__header">
        <Link className="btn" link to="/">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary">Save</button>
        <button className="btn danger">
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note__form">
        <input type="text" autoFocus placeholder="Title" />
        <textarea placeholder="Note Details" rows="30"></textarea>
      </form>
    </section>
  );
};

export default EditNotes;
