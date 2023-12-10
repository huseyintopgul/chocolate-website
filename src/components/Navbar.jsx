import React from 'react'
import { FaBars } from 'react-icons/fa';
function Navbar() {

  const showNavbar = () => {
    const nav = document.querySelector("nav")
    nav.style.display = (nav.style.display == "" || nav.style.display == "none") ? "block" : "none"
  }
  return (
    <div>
      <div className='navbar'>
      {/* Nav Icons */}

      <div className='bar_icon'>
      <FaBars onClick={showNavbar} />
      </div>
        <nav>
          <ul>
            <li>
              <a href='#'>Shop
                <i style={{ margin: "10px" }} class='fas fa-caret-down'></i>
              </a>
            </li>
            <li>
              <a href='#'>Browse Brands
                <i style={{ margin: "10px" }} class='fas fa-caret-down'></i>
              </a>
            </li>
            <li><a href='#'>6th Annual DC Chocolate Festival</a></li>
            <li><a href='#'>Weddings & Corporate</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>About</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar