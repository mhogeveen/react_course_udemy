import React from 'react'

class GoogleAuth extends React.Component {
   state = { isSignedIn: null }

   componentDidMount() {
      window.gapi.load('client:auth2', () => {
         window.gapi.client
            .init({
               clientId: '364483540726-drabtqatf9rk7aor104nrcndg8jkl9er.apps.googleusercontent.com',
               scope: 'email',
            })
            .then(() => {
               this.auth = window.gapi.auth2.getAuthInstance()
               this.setState({ isSignedIn: this.auth.isSignedIn.get() })
               this.auth.isSignedIn.listen(this.onAuthChange)
            })
      })
   }

   onAuthChange = () => {
      this.setState({ isSignedIn: this.auth.isSignedIn.get() })
   }

   onSignIn = () => {
      this.auth.signIn()
   }

   onSignOut = () => {
      this.auth.signOut()
   }

   renderAuthButton() {
      if (this.state.isSignedIn === null) {
         return <div className='ui active inline loader small'></div>
      } else if (this.state.isSignedIn) {
         return (
            <button onClick={this.onSignOut} className='ui tiny labeled icon red basic button'>
               <i className='google icon'></i>
               Sign Out
            </button>
         )
      } else {
         return (
            <button onClick={this.onSignIn} className='ui tiny labeled icon green basic button'>
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

export default GoogleAuth
