import React from 'react'
import { connect } from 'react-redux'
import { createStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component {
   onSubmit = (formValues) => {
      this.props.createStream(formValues)
   }

   render() {
      return (
         <div style={{ marginTop: '20px' }}>
            <h2 className='ui header'>
               <i className='icon plus blue' />
               <div className='content'>Create a Stream</div>
            </h2>
            <StreamForm onSubmit={this.onSubmit} buttonType='positive' />
         </div>
      )
   }
}

export default connect(null, { createStream })(StreamCreate)
