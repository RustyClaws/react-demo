// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home.tsx';
import Dashboard from './pages/Dashboard.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Setting from './pages/Setting.tsx';
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 所有页面都将使用 MainLayout 作为布局 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          {/* 你可以在这里添加更多路由 */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
