import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


function App() {
  return <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={4} category={"general"} />} />
          <Route exact path="/general" element={<News key="general" pageSize={4} category={"general"} />} />
          <Route exact path="/business" element={<News key="business" pageSize={4} category={"business"} />} />
          <Route exact path="/health" element={<News key="health" pageSize={4} category={"health"} />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={4} category={"sports"} />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={4} category={"entertainment"} />} />
          <Route exact path="/science" element={<News key="science" pageSize={4} category={"science"} />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={4} category={"technology"} />} />
        </Routes>
      </Router>
    </div>;
}

export default App
