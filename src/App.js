import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Land from './components/Land';
import Doc from './components/Doc';
import Edit from './components/Edit';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Land />} />
        <Route path='/document' element={<Doc />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
