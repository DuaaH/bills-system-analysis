import React, { useState, useEffect } from 'react';
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
import Styles from './style';
import Group from '../../assets/Group.svg';

const PersonalInfo = () => {
  const [information, setInformation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [townName, settownName] = useState('');
  // const [cityName, setcityName] = useState('');
  // const [userStatus, setuserStatus] = useState('');
  // const [userNumber, setuserNumber] = useState('0');
  // const [deviceNumber, setdeviceNumber] = useState('0');
  const [click, setClick] = useState(false);
  const userName = click ? 'enter your name ': information.display_name;
  console.log(userName);
  console.log(information);
 const[userInfo , setuserInfo] = useState({
  cityName: {
    value: '',
    lable: 'name of city',
    message: '',
    isValid: true,
    isRequired: true,
    type: 'dropDown',
  },
   townName: {
    value: '',
    lable: ' town name ',
    message: '',
    isValid: true,
    isRequired: true,
    type: 'dropDown',
  },
   displayName:{
     value: {userName}, 
    
     lable:' user name', 
     message: 'hi',
    isValid: true,
    isRequired: true,
    type: 'text'

  },
  mobile:{
    // value: {information.phone}, 
     lable:' user number', 
     message: '',
    isValid: true,
    isRequired: true,
    type: 'number'
  },
  numberOfDevices:{
    value: '', 
     lable:' number of devices', 
     message: '',
    isValid: true,
    isRequired: true,
    type: 'number'
  },
  numberOfindivisuals:{
    value: '', 
     lable:' number of devices', 
     message: '',
    isValid: true,
    isRequired: true,
    type: 'number'
  }, 
  status:{
    value: '', 
     lable:' number of devices', 
     message: '',
    isValid: true,
    isRequired: true,
    type: 'dropDown'
  }
  
})

  const names = ['Halhul', 'Dura'];
  const city = ['Hebron', 'Bethlehem'];
  const status = ['None', 'single', 'Married'];
  // const handleChange = (event) => {
  //   setClick(true);

  //   settownName(event.target.value);
  // };
  // const handleCityChange = (event) => {
  //   setClick(true);
  //   setcityName(event.target.value);
  // };
  // const handleStatusChange = (event) => {
  //   setClick(true);
  //   setuserStatus(event.target.value);
  // };
  // const handleNumChange = (event) => {
  //   setClick(true);
  //   setuserNumber(event.target.value);
  // };
  // const handleDeviceChange = (event) => {
  //   setClick(true);
  //   setdeviceNumber(event.target.value);
  // };
  useEffect(() => {
    axios
      .get('/api/profile')
      .then((res) => {
        setInformation(res.data.Result);
        setIsLoading(false);
        setClick(true);
      })
      .catch((err) => {
        if (err.res.data) {
          console.log(err);
        }
      });
  }, []);

  const classes = Styles();

  // const town = click ? townName : information.town;
  // const City = click ? cityName : information.city;
  // const relation = click ? userStatus : information.personal_status;
  // const num = click ? information.number_of_individuals : userNumber;
  // const device = click ? information.number_of_devices : deviceNumber;
 
  
  return (
    <Box component="div" p={3} width={1}>
      <LoaderProgress isLoading={isLoading} />
      <Grid container item sx={12}>
        <Grid item container xs={6}>
          <Typography variant="h4" color="textPrimary" align="left">
            profile
          </Typography>
        </Grid>

        <Grid item container xs={12} justify="space-evenly" direction="row">
          <img src={Group} alt="user-profile" className={classes.image} />
        </Grid>

        <Grid item container xs={12}>
          <Grid xs={6}>
            <InputLabel className={classes.root}> Name</InputLabel>
          </Grid>
          <Grid xs={6} className={classes.gridPosition}>
            <Input
              className={classes.text}
              value= {userInfo.displayName.value}
              inputProps={{ style: { textAlign: 'right' } }}
              disableUnderline={true}
            />
          </Grid>
        </Grid>

        <hr className={classes.LineHorizantal} />
        <Grid item container xs={12}>
          <Grid xs={6}>
            <InputLabel className={classes.root}> Mobile Number </InputLabel>
          </Grid>
          <Grid xs={6} className={classes.gridPosition}>
            <Input
              // value={information.phone}
              className={classes.text}
              disableUnderline={true}
              inputProps={{ style: { textAlign: 'right' } }}
            />
          </Grid>
        </Grid>
        <hr className={classes.LineHorizantal} />
        <Grid item container xs={12}>
          <Grid xs={6}>
            <InputLabel className={classes.root}> Address </InputLabel>
          </Grid>
          <Grid xs={6} className={classes.gridPosition}>
            <FormControl>
              <InputLabel>Town</InputLabel>

              <NativeSelect
                // value={town}
                // onChange={handleChange}
                input={<Input />}
                inputProps={{ style: { textAlign: 'right' } }}
                disableUnderline={true}
              >
                {names.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
            <FormControl>
              <InputLabel>city</InputLabel>

              <NativeSelect
                // value={City}
                // onChange={handleCityChange}
                input={<Input />}
                inputProps={{ style: { textAlign: 'right' } }}
                disableUnderline={true}
              >
                {city.map((citys) => (
                  <option key={citys} value={citys}>
                    {citys}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
        <hr className={classes.LineHorizantal} />

        <Grid item container xs={12}>
          <Grid xs={6}>
            <InputLabel className={classes.root}>
              {' '}
              Number of indivisuals{' '}
            </InputLabel>
          </Grid>
          <Grid xs={6} className={classes.gridPosition}>
            <TextField
              InputProps={{
                inputProps: { min: 1, max: 20 },
                inputProps: { style: { textAlign: 'right' } },
              
              }}
              
              
              type="number"
              // value={num}
              disableUnderline={true}
              // onChange={handleNumChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <hr className={classes.LineHorizantal} />
        <Grid item container xs={12}>
          <Grid xs={6}>
            <InputLabel className={classes.root}> status </InputLabel>
          </Grid>
          <Grid xs={6} className={classes.gridPosition}>
            <NativeSelect
              // value={relation}
              input={<Input />}
              // onChange={handleStatusChange}
              disableUnderline={true}
            >
              {status.map((personStatus) => (
                <option key={personStatus} value={personStatus}>
                  {personStatus}
                </option>
              ))}
            </NativeSelect>
          </Grid>
        </Grid>
        <hr className={classes.LineHorizantal} />

        <Grid item container xs={12}>
          <Grid xs={6}>
            <InputLabel className={classes.root}>
              {' '}
              Number of devices{' '}
            </InputLabel>
          </Grid>
          <Grid xs={6} className={classes.gridPosition}>
            <TextField
              className={classes.root}
              InputProps={{
                inputProps: { min: 1, max: 20 },
                inputProps: { style: { textAlign: 'right' } },
              }}
              type="number"
              // value={device}
              // onChange={handleDeviceChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <hr className={classes.LineHorizantal} />
        <Grid item container xs={6} className={classes.Button}>
          <Button className={classes.updateButt}>Update</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInfo;
