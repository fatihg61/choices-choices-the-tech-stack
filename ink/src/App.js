import Header from './pages/components/Header.js';
import Footer from './pages/components/Footer.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about.js'; // The new page component

// import './main.css';

export let data


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="./about.js" element={<About />} />
      </Routes>
      {/* The rest of your app content goes here */}
      <div className="main-content">
        {/* Your app content */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
