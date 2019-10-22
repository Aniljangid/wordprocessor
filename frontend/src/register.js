import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { navigate } from '@reach/router';

const RegisterForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
     	Word Processor
      </Header>
      <Form>
        <Segment>
          <Form.Input fluid  placeholder='Name' />
          <Form.Input fluid  placeholder='Email Id' />
          <Form.Input fluid  placeholder='Password' />

          <Button color='black' fluid size='large'>
            Register
          </Button>
        </Segment>
      </Form>
      <Message onClick={()=> {navigate("/login")}}>
        Already Registered?
      </Message>
    </Grid.Column>
  </Grid>
)

export default RegisterForm
