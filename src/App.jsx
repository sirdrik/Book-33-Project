import Header from "./components/Header"
import Footer from "./components/Footer"
import BookList from "./components/BookList"
import BooksFilter from "./components/BooksFilter"
import booksRaw from "./components/data/book";
function App() {
  

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <BooksFilter />
        <BookList books={booksRaw}/>
      </main>
      <Footer />
    </>
  )
}

export default App
