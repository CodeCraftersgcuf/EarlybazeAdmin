import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css'
import Layout from './layout/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<La />}> */}
            <Route path="/" element={<Layout />} />
          {/* </Route> */}
        </Routes>
      </Router>
      {/* hello */}
    </>
  )
}

export default App
