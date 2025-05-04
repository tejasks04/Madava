import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Contact from './Pages/contact';
import Navbar from './Components/navigationbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<h1 style={{color:"red"}}>Page Not Found!</h1>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
