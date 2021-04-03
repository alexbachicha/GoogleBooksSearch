# React Google Books Search

## Description

The Google Books Search is a React-based application that uses MERN stack and the Google Books API. Users can search for books based on search criteria and save books to review later on.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)

## Installation

Install dependencies
```
npm install
```

To start the server
```
npm start
```

The application can be viewed at [localhost:3001](http://localhost:3001/)

## Usage

- Users are directed to the home page where they can search for a book using their defined search criteria

- Relevant results will be pulled upon search. Users can save a specified book to the Saved page. This is where the back-end of the application comes into play; the book data is stored in the MongoDB. 

- Users can delete books from their saved list if they want them removed. This will also delete the spefific book content from the MongoDB

## License

Licensed under the [MIT License](license.txt)

## Credits

* UC Davis Coding Bootcamp Class Repo
* [Learn With Param](https://learnwithparam.com/blog/learn-react-hooks-by-building-books-search/)
* [Google Books API Tutorial](https://www.youtube.com/watch?v=6sBqMyUOcl8)

Technologies used within this application include:
* ReactJS
* MongoDB and Mongoose
* Express
* Node
* Axios
* [Google Books API](https://developers.google.com/books/)