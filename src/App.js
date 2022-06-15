import spinner from './spinner.png';
import Nav from './Nav';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={spinner} className="App-logo" alt="logo" />
        <h1>Coming soon...</h1>
      </header>
      <Footer />
    </div>
  );
}

export default App;
