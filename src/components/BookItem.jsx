

function BookItem({ book, booksData,setBooksData }) {// onRemove,

  // RemoveBook

    function handleRemove(){
       
        fetch(`http://localhost:3003/books/${book.id}`,{
        method:'DELETE'
        })
        const dataafterfilter = booksData.filter(b=> b.id ===book.id? false : true)
        setBooksData(dataafterfilter)
   }

   //update link
   function handleUpdateLikes(){
    fetch(`http://localhost:3003/books/${book.id}`,{
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({likes:book.likes+1})
    }
    )
        .then(res=>res.json())
        .then(updatedBook =>{
            const updatedBooksData = booksData.map(book =>{
                if (book.id!== updatedBook.id){
                    return book
                }else{
                    return updatedBook
                }
            })
            setBooksData(updatedBooksData)
        })
    }

    //update read
    function handleRead(){
        fetch(`http://localhost:3003/books/${book.id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({reads:book.reads+1})
        })
        .then(res=>res.json())
        .then(updatedBook =>{
            const updatedBooksData = booksData.map(book=>{
                if (book.id!==updatedBook.id){
                    return book
                }else{
                    return updatedBook
                }
            })
            setBooksData(updatedBooksData)
        })
    }
   

    // RENDER
    return (
        <div className="flex-item book-item">

            <h2>{book.title}</h2>

            <h3>By {book.author}</h3>

            <button onClick={handleUpdateLikes}>{book.likes} Likes</button>

            <button onClick={handleRead}>Read by {book.reads} people</button>

            <button onClick={handleRemove}>Remove Book</button>

        </div>
    )

}

export default BookItem