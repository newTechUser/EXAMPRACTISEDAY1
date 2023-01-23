import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="start">
            <p className="starttext">
                OneSchool
            </p>
        </div>
        <div className="center">
            <ul className="pagelist">
                <li className="pagelistitem">
                    <Link style={{textDecoration:'none',color:'black'}} to='/'>Home</Link>
                </li>
                <li className="pagelistitem">
                    <Link style={{textDecoration:'none',color:'black'}} to='/Add'>Add</Link>
                </li>
                <li className="pagelistitem">Programs</li>
                <li className="pagelistitem">Teachers</li>
            </ul>
        </div>
        <div className="end">
            <div className="divbtn">
                <button className="btn">
                    Contact us
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar