import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [count, setCount] = useState(0)
    const [greeting, setGreeting] = useState('');


    useEffect(() => {
        // Function to fetch data from the Spring Boot backend


        const fetchGreeting = async () => {
            try {
                const response = await axios.get('/api/greet'); // Use the proxy path
                setGreeting(response.data); // Assuming your backend returns a string
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchGreeting();
    }, []); // Empty dependency array means this will run once when the component mounts

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Got Lost is here!</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>{greeting}</p>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
