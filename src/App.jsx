import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ActiveUsersInfo from './Components/ActiveUsersInfo/ActiveUsersInfo';
import Banner from './Components/Banner/Banner';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart}/>
      <Banner />
      <ActiveUsersInfo />
    </>
  )
}

export default App
