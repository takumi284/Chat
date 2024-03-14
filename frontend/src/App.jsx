import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');

  // useEffect(() => {
  //   fetch('http://localhost:5000/api/chat')
  //     .then((res) => res.text())
  //     .then((data) => setMessage(data));
  // }, []);

  const hundleChangeText = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'text': text
        }),
    })
    .then(response => response.text())
    .then(data => {
        setMessage(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
  }

  return (
    <div className="App">
      <div>
        <h1>Next.js + Flask</h1>
        <input type="text" onChange={hundleChangeText}/>
        <button onClick={handleSubmit}>Send</button>
        <p>{message}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default App;