import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        isbn: {
            type: String,
            required: true,
        },
        pageCount: {
            type: Number,
            required: true,
        },
        publishedDate: {
            type: Date,
            required: true,
        },
        thumbnailUrl: {
            type: String,
            required: true,
        },
        shortDescription: {
            type: String,
            required: true,
        },
        longDescription: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        authors: [{
            type: String,
            required: true,
        }],
        categories: [{
            type: String,
            required: true,
        }],
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('Book', bookSchema);