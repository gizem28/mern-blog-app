import './App.css';
import Homepage from './pages/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
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
    <Route path='/articles' exact element={<ArticlesListPage />} />
    <Route path='/article/:name' element={<ArticlePage />} />
    <Route component={NotFoundPage}/>
    </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
