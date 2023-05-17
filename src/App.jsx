import React from "react";
import CreateNotes from "./Pages/CreateNotes";
import EditNotes from "./Pages/EditNotes";
import Notes from "./Pages/Notes";
import { useState } from "react";
import Dummy_notes from "./assets/react-notes-starter-main/Dummy_notes"

import { Routes, Route } from "react-router-dom";
import UseCreateTime from "./Components/UseCreateTime";

function App() {
  const[notes,setNotes]=useState([])
  
  return (
    <main id="app">
      {/* classname="app" */}
      <Routes>
        <Route path="/" element={<Notes notes={notes} />} />
        <Route path="/create-note" element={<CreateNotes  setNotes={setNotes} notes={notes}/>} />
        <Route path="/edit-note/:id" element={<EditNotes />} />
      </Routes>
   
    </main>
  );
  
} 

export default App;
