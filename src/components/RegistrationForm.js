// import React from 'react'
// import { Button, Checkbox, Form } from 'semantic-ui-react'

// const FormExampleForm = () => (
//     // <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
//     // <Grid.Column style={{ maxWidth: 450 }}>
//     //   <Header as="h2" color="teal" textAlign="center">
//     //     Log-in to your account
//     //   </Header>
//   <Form>
//     <Form.Field>
//       <label>First Name</label>
//       <input placeholder='First Name' />
//     </Form.Field>
//     <Form.Field>
//       <label>Last Name</label>
//       <input placeholder='Last Name' />
//     </Form.Field>
//     <Form.Field>
//       <label>Date Of Birth</label>
//       <input placeholder='Date Of Birth' />
//     </Form.Field>
//     <Form.Field>
//       <label>Gender</label>
//       <input placeholder='Gender' />
//     </Form.Field>
//     <Form.Field>
//       <label>E-Mail</label>
//       <input placeholder='E-Mail' />
//     </Form.Field>
//     <Form.Field>
//       <label>Password</label>
//       <input placeholder='Password' />
//     </Form.Field>
//     <Form.Field>
//       <Checkbox label='I agree to the Terms and Conditions' />
//     </Form.Field>
//     <Button type='submit'>Submit</Button>
//     <Button type='submit'>Cancel</Button>
//   </Form>
// )

// export default FormExampleForm

import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

import Logo from "../image/star.jpeg"

const Register = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="teal" textAlign="center">
        <Image src={Logo}/> Log-in to your account
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="First Name"
          />
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Last Name"
          />
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="tel"
            iconPosition="left"
            placeholder="Phone"
          />
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="teal" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href="#">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default Register;

