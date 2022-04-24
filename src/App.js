import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewPost from './components/NewPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route exact path="/newpost" element={<NewPost />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

// <Route path="/" element={<Home />}></Route>
