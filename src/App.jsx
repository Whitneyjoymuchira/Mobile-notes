import React, { useEffect } from "react";
import CreateNotes from "./Pages/CreateNotes";
import EditNotes from "./Pages/EditNotes";
import Notes from "./Pages/Notes";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      {/* classname="app" */}
      <Routes>
        <Route path="/" element={<Notes notes={notes} />} />
        <Route path="/create-note" element={<CreateNotes setNotes={setNotes} notes={notes} />} />
        <Route path="/edit-note/:id" element={<EditNotes />} />
      </Routes>
    </main>
  );
}

export default App;
