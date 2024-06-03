import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Spinner from './Spinner'
import BackButton from './BackButton'

const RandomBook = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios
    .get('http://localhost:5555/books')
    .then((response) => {
      if (Array.isArray(response.data.data)) {
        const randomIndex = Math.floor(Math.random() * response.data.data.length);
        setBook(response.data.data[randomIndex]);
      } else {
        console.error('Error: response.data.data is not an array:', response.data.data);
      }
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  }, []);

  return (
    <div className='p-4'>
        <BackButton /><br />
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
            <span className='text-xl mr-4 text-gray-500'>Authors</span>
            <span className='text-xl'>{book.authors}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Published Year</span>
            <span className='text-xl'>{book.publishedDate}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Number of pages</span>
            <span className='text-xl'>{book.pageCount}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>description</span>
            <span className='text-xl'>{book.shortDescription}</span>
          </div>
        </div>  
      )}
    </div>
  )
}

export default RandomBook