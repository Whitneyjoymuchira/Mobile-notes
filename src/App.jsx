import React from 'react'
import CreateNotes from './Pages/CreateNotes'
import EditNotes from './Pages/EditNotes'
import Notes from './Pages/Notes'
import { useState } from 'react'

import { Routes,Route } from 'react-router-dom'
function App() {
 
  return (
<div className="app">
<Routes>
  <Route path="/" element={<Notes />} />
  <Route path="/create-note" element={<CreateNotes />} />
  <Route path="/edit-note/:id" element={<EditNotes />} />
</Routes>
</div>
  )
}

export default App

