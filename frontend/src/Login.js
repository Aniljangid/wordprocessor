import React from 'react';
import { navigate } from '@reach/router';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
     	Word Processor
      </Header>
      <Form>
        <Segment>

          <Form.Input fluid  placeholder='Email Id' />
          <Form.Input fluid  placeholder='Password' />

          <Button color='blue' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message onClick={()=> {navigate("/")}}>
        Not yet Registered?
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm