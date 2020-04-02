import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'


class ContactForm extends React {
  state = {
           firstName: '',
           lastName: '',
           message: '',
           sent: false,
           buttonText: 'Send Message'
  }
  
  resetForm = () => {
    this.setState({
        name: '',
        message: '',
        email: '',
        buttonText: 'Message Sent'
    })
}
  formSubmit = (e) => {
    e.preventDefault()
  
    this.setState({
        buttonText: '...sending'
    })

    
  
    let data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
    }
    
    axios.post('API_URI', data)
    .then( res => {
        this.setState({ sent: true }, this.resetForm())
    })
    .catch( () => {
      console.log('Message not sent')
    })
  }
  render() {
    return(
      <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>

    )
    }
}

export default ContactForm