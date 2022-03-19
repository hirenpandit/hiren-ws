import './style/nord.css'
import './App.css'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/home/home';
import ResumePdf from'./resume/resume.pdf'
import Post from './components/posts/posts';

function App() {

  const openResume = () => {
    window.open(ResumePdf, "_blank")
  }
  return (
    <>
      <div className='navigation'>
        <Router>
          <div className='navigation-links'>
            <div className='link'><Link to="/post">Posts</Link></div>
            <div className='link'><Link to="/" onClick={openResume}>Resume</Link></div>
            <div className='link'><Link to="/">Home</Link></div>
          </div>
        
          <Routes>
            <Route exact path="/" element = {<Home/>}/>
            <Route exact path="/post" element= {<Post/>}/>
            <Route exact path="/resume" element={<Resume/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

function Resume() {
  return (
    <div>
      <h2>Resumes</h2>
    </div>
  );
}

export default App;
