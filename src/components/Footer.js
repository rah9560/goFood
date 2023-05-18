import React from 'react'
import {Link} from "react-router-dom"
 
const Footer = () => {
  return (
    <div>
      <footer className="text-center text-white bg-success " style={{"background-color": "#21081a"}}>
        <div className="container p-4"></div>
        <div className="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
          © 2020 Copyright:
          <Link className="text-white" to="/">MDBootstrap.com</Link>
        </div>
      </footer>
    </div>
  )
}

export default Footer