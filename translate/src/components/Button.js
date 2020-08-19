import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {
   render() {
      return (
         <ColorContext.Consumer>
            {(color) => (
               <button className={`ui ${color} button`}>
                  <LanguageContext.Consumer>
                     {({ language }) => (language === 'english' ? 'Submit' : 'Indienen')}
                  </LanguageContext.Consumer>
               </button>
            )}
         </ColorContext.Consumer>
      )
   }
}

export default Button
