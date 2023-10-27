import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* The rest of your app content goes here */}
      <div className="main-content">
        {/* Your app content */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
