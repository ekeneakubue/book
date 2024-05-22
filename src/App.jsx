import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import ReadOut from './pages/readout/ReadOut';
import BookShelf from './pages/bookshelf/BookShelf';
import Explore from './pages/explore/Explore';
import MyNotes from './pages/myNotes/MyNotes';
import Saved from './pages/saved/Saved';
import Shared from './pages/shared/Shared';
import SearchResult from './pages/searchResult/SearchResult';
import Settings from './pages/settings/Settings';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
// import Lifestyle from './components/category/lifestyle/Lifestyle';
// import Novels from './components/category/Novels';

function App() {
  return (
    <BrowserRouter>
      <div className='bookworm-main'>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/dashboard' element = {<Dashboard />} />  
        <Route path = '/readout' element = {<ReadOut />} />         
        <Route path = '/bookshelf' element = {<BookShelf />} />
        <Route path = '/explore' element = {<Explore />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/mynotes' element = {<MyNotes />} />
        <Route path = '/saved' element = {<Saved />} />
        <Route path = '/shared' element = {<Shared />} />
        <Route path = '/searchresult' element = {<SearchResult />} />
        <Route path = '/settings' element = {<Settings />} />
        <Route path = '/signup' element = {<Signup />} />
        <Route path = '/login' element = {<Login />} />
        {/* <Route path = '/lifestyle' element = {<Lifestyle />} /> */}
        {/* <Route path = '/novels' element = {<Novels />} /> */}
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
