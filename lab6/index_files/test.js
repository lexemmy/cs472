const expect = chai.expect

describe('Library', () => {
  it('should add a book to the library', () => {
    const book = addBook('Purple Hibiscus', 'Chimamanda Adichie', 1234)

    expect(libraryBooks).to.deep.include(book)

    expect(book).to.deep.equal({
      title: 'Purple Hibiscus',
      author: 'Chimamanda Adichie',
      libraryID: 1234,
    })
  })
})

describe('getTitles', () => {
  it('should return book titles in alphabetical order', () => {
    const titles = getTitles()
    const expectedTitles = [
      'Mockingjay: The Final Book of The Hunger Games',
      'Purple Hibiscus',
      'The Road Ahead',
      'The Road Ahead',
      'Walter Isaacson',
    ]

    expect(titles).to.deep.equal(expectedTitles)
  })
})

describe('findBooks', () => {
  it('should find books by keyword in alphabetical order by author', () => {
    const keyword = 'the'
    const books = findBooks(keyword)
    const expectedBooks = [
      { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1235 },
      { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 4268 },
      {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3257,
      },
    ]

    expect(books).to.deep.equal(expectedBooks)
  })
})
