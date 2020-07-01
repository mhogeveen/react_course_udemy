import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
   componentDidMount() {
      window.gapi.load('client:auth2', () => {
         window.gapi.client
            .init({
               clientId: '364483540726-drabtqatf9rk7aor104nrcndg8jkl9er.apps.googleusercontent.com',
               scope: 'email',
            })
            .then(() => {
               this.auth = window.gapi.auth2.getAuthInstance()
               this.onAuthChange(this.auth.isSignedIn.get())
               this.auth.isSignedIn.listen(this.onAuthChange)
            })
      })
   }

   onAuthChange = (isSignedIn) => {
      if (isSignedIn) {
         this.props.signIn(this.auth.currentUser.get().getId())
      } else {
         this.props.signOut()
      }
   }

   onSignInClick = () => {
      this.auth.signIn()
   }

   onSignOutClick = () => {
      this.auth.signOut()
   }

   renderAuthButton() {
      if (this.props.isSignedIn === null) {
         return (
            <button
               onClick={this.onSignInClick}
               className='ui tiny labeled icon green basic button'
            >
               <i className='google icon'></i>
               <div className='ui active inline loader mini'></div>
            </button>
         )
      } else if (this.props.isSignedIn) {
         return (
            <button onClick={this.onSignOutClick} className='ui tiny labeled icon red basic button'>
               <i className='google icon'></i>
               Sign Out
            </button>
         )
      } else {
         return (
            <button
               onClick={this.onSignInClick}
               className='ui tiny labeled icon green basic button'
            >
               <i className='google icon'></i>
               Sign In with Google
            </button>
         )
      }
   }

   render() {
      return <div className='item'>{this.renderAuthButton()}</div>
   }
}

const mapStateToProps = (state) => {
   return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
