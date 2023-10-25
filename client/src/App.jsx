import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Display from './components/Display'
import Form from './components/Form'
import EditBook from './components/EditBook'
import DeleteBook from './components/DeleteBook'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Display />} />
          <Route path="/new" element={ <Form />} />
          <Route path="/books/edit/:id" element={ <EditBook />} />
          <Route path="/books/delete/:id" element={ <DeleteBook />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
