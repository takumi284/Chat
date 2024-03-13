import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <h1>Next.js + Flask</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
