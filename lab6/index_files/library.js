let libraryBooks = [
  { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1235 },
  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4268 },
  { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 4268 },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3257,
  },
]

function addBook(title, author, libraryID) {
  const newBook = {
    title,
    author,
    libraryID,
  }
  libraryBooks.push(newBook)
  return newBook
}

function getTitles() {
  const titles = libraryBooks.map((book) => book.title)
  return titles.sort()
}

function findBooks(keyword) {
  const matchingBooks = libraryBooks.filter((book) =>
    book.title.toLowerCase().includes(keyword.toLowerCase())
  )

  matchingBooks.sort((a, b) => a.author.localeCompare(b.author))

  return matchingBooks
}
