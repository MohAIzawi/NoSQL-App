import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();


// route to save a new book
router.post('/', async (request, response) => {
    console.log(request.body);
    try {
        if (
            !request.body.title ||
            !request.body.authors ||
            !request.body.publishedDate
        ) {
            return response.status(400).send({ message: 'All 3 fields of data are required' });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.authors,
            publishYear: request.body.publishedDate,
        };

        const book = await Book.create(newBook)

        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// route to get all books
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});

        return response.status(200).send({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(400).send({ message: error.message });
    }
});

// route to get a book by id
router.get('/:id', async (request, response) => {
    console.log(request.params.id);
    try {
        const book = await
            Book.findById(request.params.id);

        if (book) {
            return response.status(200).send(book);
        } else {
            return response.status(404).send({ message: 'Book not found' });
        }
    } catch (error) {
        console.log(error.message);
        response.status(400).send({ message: error.message });
    }
});

// route to update a book by id
router.put('/:id', async (request, response) => {
    console.log(request.params.id);
    try {
        const book = await
            Book.findById(request.params.id);

        if (book) {
            book.title = request.body.title || book.title;
            book.author = request.body.author || book.author;
            book.publishYear = request.body.publishYear || book.publishYear;

            const updatedBook = await book.save();

            return response.status(200).send(updatedBook);
        } else {
            return response.status(404).send({ message: 'Book not found' });
        }
    } catch (error) {
        console.log(error.message);
        response.status(400).send({ message: error.message });
    }
});

// route to delete a book by id
router.delete('/:id', async (request, response) => {
    console.log(request.params);
    try {
        const book = await Book.findByIdAndDelete(request.params.id);

        if (book) {
            return response.status(200).send({ message: 'Book removed' });
        }
        return response.status(404).send({ message: 'Book not found' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;