import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { navigate } from "@reach/router";

class RegisterForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      password : ""
    }
  }

  changeName = (e) => {
    this.setState({
      name : e.target.value
    })
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
    fetch('http://localhost:5558/user', {
      method : 'POST',
      headers : header,
      body: JSON.stringify(data)
    }).then(res => {
      if(res.status === 200){
        navigate("/login")
      }
    })
    console.log(data);
  }

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            Word Processor
          </Header>
          <Form>
            <Segment>
              <Form.Input fluid placeholder="Name" onChange={this.changeName}/>
              <Form.Input fluid placeholder="Email Id" onChange={this.changeEmail}/>
              <Form.Input fluid placeholder="Password" onChange={this.changePass}/>

              <Button color="black" fluid size="large" onClick={this.submit}>
                Register
              </Button>
            </Segment>
          </Form>
          <Message
            onClick={() => {
              navigate("/login");
            }}
          >
            Already Registered?
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default RegisterForm;
