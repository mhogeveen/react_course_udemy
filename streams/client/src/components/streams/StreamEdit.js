import React from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {
   componentDidMount() {
      this.props.fetchStream(this.props.match.params.id)
   }

   onSubmit = (formValues) => {
      this.props.editStream(this.props.match.params.id, formValues)
   }

   render() {
      return (
         <div style={{ marginTop: '20px' }}>
            <h2 className='ui header'>
               <i className='icon edit blue' />
               <div className='content'>Edit a Stream</div>
            </h2>
            <StreamForm
               initialValues={
                  this.props.stream
                     ? {
                          title: this.props.stream.title,
                          description: this.props.stream.description,
                       }
                     : null
               }
               onSubmit={this.onSubmit}
               buttonType='primary'
            />
         </div>
      )
   }
}

const mapStateToProps = (state, { match }) => {
   return { stream: state.streams[match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)
