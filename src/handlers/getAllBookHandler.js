const books = require('../books');

const getAllBookHandler = (request, h) => {
  const { name, reading, finished } = request.query;

  const filteredBooks = books.filter((book) => {
    let filteredName = true;
    let filteredReading = true;
    let filteredFinished = true;

    if (name !== undefined) {
      const searchName = name.toLowerCase();
      const lowerCaseBookName = book.name.toLowerCase();
      filteredName = lowerCaseBookName.indexOf(searchName) !== -1;
    }

    if (reading !== undefined) {
      filteredReading = book.reading === Boolean(Number(reading));
    }

    if (finished !== undefined) {
      filteredFinished = book.finished === Boolean(Number(finished));
    }

    return filteredName && filteredReading && filteredFinished;
  });

  const booksResponse = filteredBooks.map((book) => {
    const returnBook = {
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    };
    return returnBook;
  });

  const response = h.response({
    status: 'success',
    data: {
      books: booksResponse,
    },
  }).code(200);
  return response;
};

module.exports = getAllBookHandler;
