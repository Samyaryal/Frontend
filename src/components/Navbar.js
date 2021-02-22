import React from 'react';

const NavBar = () => {
  return (
    <div className = "navbar navbar-expand-lg navbar-light p-3 mb-2 bg-secondary text-white">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className ="navbar-nav">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
    <a className="nav-link" href="/products">Products</a>
    <a className="nav-link" href="/store-services">Stores</a>
    <a className="nav-link" href="/store-services">Services & Shopping</a>
    </div>
    </div>
    </div>
  )
 
}

export default NavBar; 