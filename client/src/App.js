import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import MovieList from './components/MoviesList/MoviesList';
import Detail from './Pages/Details/Detail';
import Download from './Pages/Download/Download';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={< Home />}></Route>
          <Route path='/detail/:id' element={< Detail />}></Route>
          <Route path='/movies/:type' element={< MovieList />}></Route>
          {/* <Route path='/webseries' element={< MovieList />}></Route> */}
          <Route path='/download/:type/:moviename/:id' element={< Download />}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
