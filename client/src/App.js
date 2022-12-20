import { Routes, Route } from'react-router-dom';
import AddNewBook from './pages/AddNewBook';
import AddNewBookDraft from './pages/AddNewBookDraft';
import Home from './pages/Home';
import NewbookDemo from './pages/NewBookDemo';
import SignupDraft from './pages/SignupDraft';
import SignupPage from './pages/SignupPage';

function App() {
  return(
    <Routes>
      <Route  path="/" element={<Home />}></Route>
      <Route  path="/signup-draft" element={<SignupDraft />}></Route>
      <Route  path="/signup-page" element={<SignupPage />}></Route>
      <Route  path="/add-new-book" element={<AddNewBook />}></Route>
      <Route  path="/add-new-book-draft" element={<AddNewBookDraft />}></Route>
      <Route  path="/add-new-book-demo" element={<NewbookDemo />}></Route>
  </Routes>
  )
}

export default App;