import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../styles/nav-dropdown.css'
import { Link, Routes, Route } from 'react-router-dom'

function NavDropdown() {
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Menu">

        <Dropdown.Item>
          <Link className='dropdown-link' to='/'>Home</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          <Link className='dropdown-link' to='/about'>About</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          <Link className='dropdown-link' to='/professional'>Professional</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          <Link className='dropdown-link' to='/personal'>Personal</Link>
        </Dropdown.Item>

      </DropdownButton>
    </div>
  )
}
// <Link className='link' to='/about'>About</Link>
// <Link className='link' to='/professional'>Professional</Link>
// <Link className='link' to='/personal'>Personal</Link>
export default NavDropdown;
