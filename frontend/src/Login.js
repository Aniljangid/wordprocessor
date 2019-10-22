import React from 'react';
import { navigate } from '@reach/router';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component { 


  constructor(props){
    super(props);
    this.state = {
      email: "",
      password : ""
    }
  }

  changeEmail = (e) => {
    this.setState({
      email : e.target.value
    })
  }
  changePass = (e) => {
    this.setState({
      password : e.target.value
    })
  }

  submit = () => {
    let data = this.state;
    let header = new Headers({
      "Content-Type": "application/json"
    });
    fetch('http://localhost:5558/user/login', {
      method : 'POST',
      headers : header,
      body: JSON.stringify(data)
    }).then(res => {
      if(res.status === 200){
        navigate("/explore")
      }
    })
    console.log(data);
  }

  render(){
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
     	Word Processor
      </Header>
      <Form>
        <Segment>

          <Form.Input fluid  placeholder='Email Id' onChange={this.changeEmail}/>
          <Form.Input fluid  placeholder='Password' onChange={this.changePass}/>

          <Button color='blue' fluid size='large' onClick={this.submit}>
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
  }
}

export default LoginForm