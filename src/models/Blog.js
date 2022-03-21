const mongoose = require('mongoose');

const Blog = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        body: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('blog', Blog);