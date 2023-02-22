import { Routes, Route } from'react-router-dom';
import AddNewBook from './pages/AddNewBook';
import AddNewBookD from './pages/AddNewBookD';
import AfterLoginPage from './pages/AfterLoginPage';
import Filter from './pages/Filter';
import Home from './pages/Home';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import NewbookDemo from './pages/NewBookDemo';
import SignInPage from './pages/SignInPage';
// import SignupDraft from './pages/SignupDraft';
// import SignUpPage from './pages/SignUpPage';
// import SignupPagetrial from './pages/SignupPagetrial';
import SignUpPage from './pages/SignUpPage';
import StartPage from './pages/StartPage';
import ViewBooks from './pages/ViewBooks';

function App() {
  return(
    <Routes>
      <Route  path="/start-page" element={<StartPage />}></Route>
      <Route  path="/" element={<Home />}></Route>
      {/* <Route  path="/viewBooks" element={<ViewBooks />}></Route> */}
      <Route  path="/login" element={<Login />}></Route>
      <Route  path="/register" element={<Login />}></Route>
      {/* <Route  path="/signup-draft" element={<SignupDraft />}></Route>
      <Route  path="/signup-page" element={<SignupPagetrial />}></Route> */}
      <Route  path="/add-new-book-D" element={<AddNewBookD />}></Route>
      {/* <Route  path="/add-new-book" element={<AddNewBook />}></Route> */}
      <Route  path="/add-new-book-demo" element={<NewbookDemo />}></Route>



      <Route  path="/home-page" element={<HomePage />}></Route>
      <Route  path="/sign-up-page" element={<SignUpPage />}></Route>
      <Route  path="/sign-in-page" element={<SignInPage />}></Route>
      <Route  path='/after-login-page' element={<AfterLoginPage />}></Route>
      <Route  path='/add-new-book' element={<AddNewBook />}></Route>
      <Route  path='/view-books' element={<ViewBooks />}></Route>
      <Route  path='/filter' element={<Filter />}></Route>



  </Routes>
  )
}

export default App;