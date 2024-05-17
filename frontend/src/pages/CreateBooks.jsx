import React, { useState } from 'react'
import BackButton from './BackButton'
import Spinner from './Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBooks = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSaveBook = () => {
    const newBook = {
      title,
      author,
      publishYear,
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
            <label htmlFor='author' className='text-xl'>
              Author
            </label>
            <input
              type='text'
              id='author'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='border-2 border-blue-400 rounded-md p-2'
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='publishYear' className='text-xl'>
              Publish Year
            </label>
            <input
              type='text'
              id='publishYear'
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
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