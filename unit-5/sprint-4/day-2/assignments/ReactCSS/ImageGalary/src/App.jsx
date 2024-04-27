

import { useState } from 'react';
import './App.css'
import Gallery from './components/Gallery'

import Navbar from './components/Navbar'
import AllRouter from './routes/AllRouter';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* <Navbar showMenu={showMenu} setShowMenu={setShowMenu}/>
      <Gallery showMenu={showMenu}/> */}
      <AllRouter/>
    </>
  )
}

export default App
