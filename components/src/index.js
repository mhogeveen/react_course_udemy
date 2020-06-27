import React from 'react'
import ReactDOM from 'react-dom'

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
   return (
      <div className='ui container comments'>
         <ApprovalCard>
            <CommentDetail author='Sam' date='Today at 4:45pm' message='Nice post bro!' />
         </ApprovalCard>

         <ApprovalCard>
            <CommentDetail author='Jane' date='Today at 11:30am' message='Thanks man' />
         </ApprovalCard>

         <ApprovalCard>
            <CommentDetail author='Alex' date='Today at 6:05pm' message='Keep it up:)' />
         </ApprovalCard>
      </div>
   )
}

ReactDOM.render(<App />, document.querySelector('#root'))
