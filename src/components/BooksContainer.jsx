import BookItem from "./BookItem"

function BooksContainer({ booksData, setBooksData }) { //onRemove

    // MAPPED BOOKS
    const mappedBooks = booksData.map( book => <BookItem key={book.id} book={book} booksData={booksData} setBooksData={setBooksData} /> ) //onRemove={onRemove}s


    // RENDER
    return (
        <div className="flex-container">

            { mappedBooks }

        </div>
    )

}

export default BooksContainer