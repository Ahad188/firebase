import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
     return (
          <div>
                <nav className='mt-4 '>
                    <ul className='flex justify-around items-center max-md:'>
                         <NavLink to="/">Home</NavLink>
                         <NavLink to="/about">about</NavLink>
                         <NavLink to="/login">Login</NavLink>
                    </ul>
                </nav>
          </div>
     );
};

export default Header;