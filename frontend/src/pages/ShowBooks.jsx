import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import BackButton from './BackButton'



const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    Axios
    .get(`http://localhost:5555/books/${id}`)
    .then((response) => {
      console.log(response.data);
      setBook(response.data); // Use response.data instead of response.data.data
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  }, [id])

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        book && <div className='flex flex-col border-2 border-blue-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>id</span>
            <span className='text-xl'>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span className='text-xl'>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span className='text-xl'>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Published Year</span>
            <span className='text-xl'>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{book.createdAt && new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Update Time</span>
            <span>{book.updatedAt && new Date(book.updatedAt).toString()}</span>
          </div>
        </div>  
      )}
    </div>
  )
}

export default ShowBooks