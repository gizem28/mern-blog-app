import './App.css';
import Homepage from './pages/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ArticlesPage from './pages/ArticlesPage'
import ArticlesListPage from './pages/ArticlesListPage'
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
      <div id="page-body"> 
      <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='about' element={<AboutPage />} />
    <Route path='/article/:name' element={<ArticlesPage />} />
    <Route path='/article-list' element={<ArticlesListPage />} />
    <Route component={NotFoundPage}/>
    </Routes>
      </div>
      </div>

    
    </BrowserRouter>
  );
}

export default App;
