import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {
   componentDidMount() {
      this.props.fetchStreams()
   }

   renderAdmin(stream) {
      if (stream.userId === this.props.currentUserId) {
         return (
            <div className='right floated content'>
               <Link to={`/streams/edit/${stream.id}`} className='ui button primary tiny'>
                  Edit
               </Link>
               <Link to={`/streams/delete/${stream.id}`} className='ui button negative tiny'>
                  Delete
               </Link>
            </div>
         )
      }
   }

   renderList() {
      return this.props.streams.map((stream) => (
         <div className='item' key={stream.id}>
            {this.renderAdmin(stream)}
            <i className='big middle blue aligned icon play' />
            <div className='content'>
               <Link to={`/streams/${stream.id}`} className='header'>
                  {stream.title}
               </Link>
               <div className='description'>{stream.description}</div>
            </div>
         </div>
      ))
   }

   renderCreate() {
      if (this.props.isSignedIn) {
         return (
            <div style={{ textAlign: 'right' }}>
               <Link to='/streams/new' className='ui button tiny positive'>
                  Create Stream
               </Link>
            </div>
         )
      }
   }

   render() {
      return (
         <>
            <h2>Streams</h2>
            <div className='ui divided list very relaxed segment'>{this.renderList()}</div>
            {this.renderCreate()}
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      streams: Object.values(state.streams),
      currentUserId: state.auth.userId,
      isSignedIn: state.auth.isSignedIn,
   }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)
