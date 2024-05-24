import React, { useState, useEffect } from 'react'
import BackButton from './BackButton'
import Spinner from './Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBooks = () => {
  const [title, setTitle] = useState('')
  const [authors, setAuthors] = useState('')
  const [publishedDate, setPublishedDate] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5555/books/${id}`)
      .then(response => {
        setTitle(response.data.title)
        setAuthors(response.data.authors)
        setPublishedDate(response.data.publishedDate)
      })
      .catch(error => console.error('Error fetching book:', error))
  }, [id])

  const handleDeleteBook = () => {
    setLoading(true)
  
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then((response) => {
        console.log(response.data)
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        console.error('Error deleting book:', error)
        setLoading(false)
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
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
              disabled
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
              disabled
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
              disabled
              className='border-2 border-blue-400 rounded-md p-2'
            />
          </div>
          <button
            onClick={handleDeleteBook}
            className='bg-red-400 text-white p-2 rounded-md w-1/4 self-center'
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default DeleteBooks