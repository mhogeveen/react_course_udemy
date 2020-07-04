import React from 'react'
import Modal from '../Modal'
import history from '../../history'

const StreamDelete = () => {
   const actions = (
      <>
         <button className='ui red button'>
            <i className='icon trash' />
            Delete
         </button>
         <button className='ui button'>Cancel</button>
      </>
   )

   const onDismiss = () => {
      history.push('/')
   }

   return (
      <div>
         StreamDelete
         <Modal
            title='Delete Stream'
            content='Are you sure you want to delete this stream?'
            actions={actions}
            onDismiss={onDismiss}
         />
      </div>
   )
}

export default StreamDelete
