import React, { useState } from 'react'
import Sidebar from './components/shared/Sidebar'
import { RiMenu3Fill, RiUser3Line, RiPieChartLine, RiAddLine, RiCloseLine} from "react-icons/ri";


function App() {

  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
		  <Sidebar showMenu={showMenu} />
      {/* Mobile menu */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full items-center text-gray-400
        justify-between py-4 px-8 bottom-0 text-3xl flex rounded-tr-xl rounded-tl-xl">
        <button className='p-2'>
          <RiUser3Line />
        </button>
        <button className='p-2'>
          <RiAddLine />
        </button>
        <button className='p-2'>
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className='text-white p-2'>
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
    </div>
  )
}

export default App
