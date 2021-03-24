const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    title: ,
    subtitle: ,
    authors: ,
    link: ,
    description: ,
    image: ,
    googleId: ,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book