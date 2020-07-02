import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
   return (
      <div className='ui pointing menu' style={{ margin: '10px' }}>
         <Link to='/' className='item header'>
            Streamy
         </Link>
         <div className='right menu'>
            <Link to='/' className='item'>
               All Streams
            </Link>
            <GoogleAuth />
         </div>
      </div>
   )
}

export default Header
