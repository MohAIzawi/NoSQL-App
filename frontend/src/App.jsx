import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks'
import ShowBooks from './pages/ShowBooks'
import DeleteBooks from './pages/DeleteBooks'
import EditBooks from './pages/EditBooks'
import RandomBook from './pages/RandomBook' // import the RandomBook component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBooks />} />
      <Route path="/books/edit/:id" element={<EditBooks />} /> 
      <Route path="/books/delete/:id" element={<DeleteBooks />} />
      <Route path="/random-book" element={<RandomBook />} />
    </Routes>
  )
}

export default App