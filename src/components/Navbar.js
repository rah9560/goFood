import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand fs-1 fst-italic fw-light m-2 mt-0 mr-0 mb-0" to="/">Gofoods</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link fw-bold text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/createuser">Signup</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar