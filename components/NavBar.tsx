import React from 'react'
type NavBarProps ={
    labels:Array<string>
}
const NavBar = ({labels}:NavBarProps) =>  {
  return (
    <nav className='m-3 '>
        <ul className='nav nav-pills  bg-light'>
       { labels.map((label) => (
             <li className="nav-item mx-4">
             <a className="nav-link h6 navbarTextColor " aria-current="page" href="#">
                {label}
             </a>
           </li>
        ))}
        </ul>
    </nav>
  )
}

export default NavBar