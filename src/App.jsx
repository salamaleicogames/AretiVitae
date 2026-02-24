import { useState, useEffect } from 'react'
import './App.css'
import Ilustration from './components/Ilustration'

function App() {
  //Previne uso de scroll
  useEffect(() => {
  const handleWheel = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  };

  const handleKeyDown = (e) => {
    if (
      e.ctrlKey &&
      (e.key === '+' || e.key === '-' || e.key === '=')
    ) {
      e.preventDefault();
    }
  };

  window.addEventListener('wheel', handleWheel, { passive: false });
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('wheel', handleWheel);
    window.removeEventListener('keydown', handleKeyDown);
  };
}, []);
  return (
    <>
      <Ilustration/>
      <div className='login'>
        <div className='card'>
          <h1 className='AVh1'>AretiVitae</h1>
          <input type='text' placeholder='Nome ou apelido' className='input'/>
          
        </div>

      </div>
    </>
  )
}

export default App
