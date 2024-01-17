import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-2 ">
      <ul className='flex flex-row space-x-4'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
