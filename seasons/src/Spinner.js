import React from 'react'

const Spinner = ({ message }) => {
   return (
      <div className='ui active inverted dimmer'>
         <div className='ui big text loader'>{message}</div>
      </div>
   )
}

Spinner.defaultProps = {
   message: 'Loading...',
}

export default Spinner
