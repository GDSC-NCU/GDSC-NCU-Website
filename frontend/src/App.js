import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './Pages/Error';
import Layout from './Layouts/Layout';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Event from './Pages/Event/Event.jsx';
import Team from './Pages/Team/Team.jsx';
import RoadMap from './Pages/RoadMap/RoadMap.jsx';
import Blog from './Pages/Blog/Blog.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/RoadMap" element={<RoadMap />} />
          <Route path="/Blog" element={<Blog />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
