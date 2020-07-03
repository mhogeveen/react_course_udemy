import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

class StreamEdit extends React.Component {
   componentDidMount() {
      this.props.fetchStream(this.props.match.params.id)
   }

   render() {
      if (this.props.stream) {
         return <div>{this.props.stream.title}</div>
      } else {
         return (
            <div className='ui active inverted dimmer'>
               <div className='ui text loader'>Loading</div>
            </div>
         )
      }
   }
}

const mapStateToProps = (state, { match }) => {
   return { stream: state.streams[match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit)
