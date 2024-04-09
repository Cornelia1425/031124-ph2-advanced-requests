import { useState, useEffect } from 'react'
import BooksContainer from './BooksContainer'
import BookForm from './BookForm'

function App() {


  // BOOKS STATE
  const [booksData, setBooksData] = useState( [] )


  // FETCH ALL BOOKS
  useEffect(() => {
      fetch("http://localhost:3003/books")
      .then(res => res.json())
      .then(data => setBooksData(data))
  }, [])
/* 
  function onRemove(bookid){
    const dataafterfilter = booksData.filter(book=> bookid ===book.id? false : true)
    setBooksData(dataafterfilter)}
 */
  
  // RENDER
  return (
    <div className="App">

      <h1>Advanced Fetch Requests</h1>

      <main>

        <BooksContainer booksData={booksData} setBooksData={setBooksData}/> 

        <BookForm booksData={booksData} setBooksData={setBooksData}/>

        
      
      </main>



    </div>
  )
}

export default App