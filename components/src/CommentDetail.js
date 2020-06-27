import React from 'react'
import faker from 'faker'

const CommentDetail = ({ author, date, message }) => {
   return (
      <div className='comment'>
         <a href='/' className='avatar'>
            <img alt='avatar' src={faker.image.avatar()} />
         </a>
         <div className='content'>
            <a href='/' className='author'>
               {author}
            </a>
            <div className='metadata'>
               <span className='date'>{date}</span>
            </div>
            <div className='text'>{message}</div>
         </div>
      </div>
   )
}

export default CommentDetail
