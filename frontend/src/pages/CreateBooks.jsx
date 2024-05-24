import React, { useState } from 'react'
import BackButton from './BackButton'
import Spinner from './Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBooks = () => {
  const [title, setTitle] = useState('')
  const [authors, setAuthors] = useState('')
  const [publishedDate, setPublishedDate] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSaveBook = () => {
    const newBook = {
      title,
      authors,
      publishedDate,
    };
  
    setLoading(true);
  
    axios
      .post('http://localhost:5555/books', newBook)
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error creating book:', error);
        setLoading(false);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col gap-y-4'>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='title' className='text-xl'>
              Title
            </label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='border-2 border-blue-400 rounded-md p-2'
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='authors' className='text-xl'>
              Authors
            </label>
            <input
              type='text'
              id='authors'
              value={authors}
              onChange={(e) => setAuthors(e.target.value)}
              className='border-2 border-blue-400 rounded-md p-2'
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='publishedDate' className='text-xl'>
              Published Date
            </label>
            <input
              type='date'
              id='publishedDate'
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
              className='border-2 border-blue-400 rounded-md p-2'
            />
          </div>
          <button
            onClick={handleSaveBook}
            className='bg-blue-400 text-white p-2 rounded-md w-1/4 self-center'
          >
            Save
          </button>
        </div>
      )}
    </div>
  )
}

export default CreateBooks