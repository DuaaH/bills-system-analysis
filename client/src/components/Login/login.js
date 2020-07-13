// import React, { Component } from 'react';
// import axios from "axios";
// import Style from './style'
// import { Button, Input } from '@material-ui/core';

// class Login extends Component {
//     state = {
//         email: "",
//         password: "",
//       };

//       handleForm = (e) => {
//         e.preventDefault();
//         const data = { email: this.state.email, password: this.state.password };

//         axios
//           .post("/api/login", data)
//           .then((result) => {
//             if (result.status === 200) {
//             //   this.props.history.push(`/home/${result.data.userId}`);
//             console.log('success');

//             }
//           })
//           .catch((err) => console.log(err.response.data.message));
//       };

//       handleInput = (e) => {
//         e.preventDefault();
//         const name = e.target.name;
//         const value = e.target.value;
//         this.setState({ [name]: value, message: null });
//       };

//   render() {
//     return (
//       <form>
//         <input
//           type="email"
//           name="email"
//           onChange={this.handleInput}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           name="password"
//           onChange={this.handleInput}
//           placeholder="Password"
//         />
//         <button
//           type="submit"
//           onClick={this.handleForm}
//         >Log in</button>
//       </form>
//     );
//   }
// }

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import {
  Grid,
  Box,
  Typography,
  Input,
  NativeSelect,
  InputLabel,
  FormControl,
  TextField,
  Button,
} from '@material-ui/core';

import LoaderProgress from '../../common-components/LoaderProgress';
import Style from './style';

function Login() {
  const classes = Style();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    const data = { email, password };

    axios
      .post('/api/login', data)
      .then((result) => {
        if (result.status === 200) {
          //   this.props.history.push(`/home/${result.data.userId}`);
          console.log('success');
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <Box component="div" p={3} width={1}>
      <LoaderProgress isLoading={isLoading} />
      <Grid container item sx={12} justify="center">
        <Grid item container xs={12}>
          <Typography variant="h4" color="textPrimary" align="center">
            Welcome Back
          </Typography>
        </Grid>
        <Grid item container xs={12}>
          <form onSubmit={handleForm} display="flex" direction="column">
            <TextField
              onChange={({ target }) => setEmail(target.value)}
              id="email"
              name="email"
              value={email}
              label="Email"
              type="text"
              className={classes.inputBox}
            />
            <TextField
              onChange={({ target }) => setPassword(target.value)}
              id="password"
              name="password"
              value={password}
              label="Password"
              type="password"
              className={classes.inputBox}
            />
            <p>{message.charAt(0).toUpperCase() + message.slice(1)}</p>
            <Button className={classes.loginBtn} type="submit" xs={12}>
              Sign in
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
