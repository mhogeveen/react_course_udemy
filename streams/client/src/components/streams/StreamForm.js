import React from 'react'
import { Form, Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {
   renderError({ error, touched }) {
      if (touched && error) {
         return (
            <div className='ui error message'>
               <div className='title'>{error}</div>
            </div>
         )
      }
   }

   renderInput = ({ input, label, meta }) => {
      return (
         <div className='field'>
            <label>{label}</label>
            <div className='ui input focus'>
               <input {...input} autoComplete='off' />
            </div>
            {this.renderError(meta)}
         </div>
      )
   }

   onSubmit = (formValues) => {
      this.props.onSubmit(formValues)
   }

   render() {
      return (
         <Form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
            <Field name='title' component={this.renderInput} label='Enter Title' />
            <Field name='description' component={this.renderInput} label='Enter Description' />
            <button className={`ui button ${this.props.buttonType}`}>Submit</button>
         </Form>
      )
   }
}

const validate = (formValues) => {
   const errors = {}

   if (!formValues.title) {
      errors.title = 'You must enter a title'
   }

   if (!formValues.description) {
      errors.description = 'You must enter a description'
   }

   return errors
}

export default reduxForm({
   form: 'streamForm',
   validate,
})(StreamForm)
