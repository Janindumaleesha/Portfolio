import React, { useState } from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className=''>
        {/* Logo */}
        <img className='h-7 ml-6 -mb-1' src={LOGO} alt='Logo' />

        {/* Navigation Links */}
        <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link 
                activeClass=""
                to={item.to}
                smooth
                spy
                offset={item.offset}
                className="menu=item"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        { /* Hire Me Button */ }
        <button className=''>Hire Me</button>
      </div>
    </div>
  )
}

export default Navbar