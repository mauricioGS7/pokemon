import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import pokeLogo from '../images/pokeapi_256.3fa72200.png'

const Layout = () => {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li><Link to='/'><h5>Home</h5></Link></li>
          <li><Link to='/buscar'><h5>Buscar</h5></Link></li>
          <li><Link to='/vertodos'><h5>Ver_Todos</h5></Link></li>
        </ul>
      </nav>
      <div>       
        <img src={pokeLogo} alt="Logo PokeApi" width="150px" height="60px"/>
      </div>
      
    </header>
    
      <Outlet/>
    </>
  )
}

export default Layout