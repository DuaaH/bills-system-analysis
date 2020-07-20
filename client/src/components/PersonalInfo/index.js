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
  Button,
} from '@material-ui/core';
import LoaderProgress from '../../common-components/LoaderProgress';
import Styles from './style';
import Group from '../../assets/Group.svg';
import NumericInput from 'react-numeric-input';

const PersonalInfo = () => {
  const [information, setInformation] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  const classes = Styles();
  const [userInfo, setuserInfo] = useState({
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
    displayName: {
      value: information.display_name,
      lable: ' user name',
      message: 'hi',
      isValid: true,
      isRequired: true,
      type: 'text',
    },
    mobile: {
      value: information.phone,
      lable: ' user number',
      message: '',
      isValid: true,
      isRequired: true,
      type: 'number',
    },
    numberOfDevices: {
      value: 0,
      lable: ' number of devices',
      message: '',
      isValid: true,
      isRequired: true,
      type: 'number',
    },
    numberOfindivisuals: {
      value: information.number_of_individuals,
      lable: ' number of devices',
      message: '',
      isValid: true,
      isRequired: true,
      type: 'number',
    },
    status: {
      value: information.personal_status,
      lable: ' number of devices',
      message: '',
      isValid: true,
      isRequired: true,
      type: 'dropDown',
    },
  });

  const names = ['Halhul', 'Dura'];
  const city = ['Hebron', 'Bethlehem'];
  const status = ['None', 'single', 'Married'];

  const handleUserChange = (event) => {
    let form = { ...userInfo };
    form[event.target.name].value = event.target.value;
    setuserInfo(form);
  };

  const handleIndivisulaChange = (event) => {
    let form = { ...userInfo };
    form['numberOfindivisuals'].value = event;
    setuserInfo(form);
  };
  const handleDeviceChange = (event) => {
    let form = { ...userInfo };
    form['numberOfDevices'].value = event;
    setuserInfo(form);
  };

  
  useEffect(() => {
    axios
      .get('/api/profile')
      .then((res) => {
        setInformation(res.data.Result);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.res.data) {
          console.log(err);
        }
      });
  }, []);








  useEffect(() => {
    setuserInfo((prevValue) => {
      return {
        ...prevValue,
        displayName: {
          ...prevValue.displayName,
          value: information.display_name,
        },
        mobile: { ...prevValue.mobile, value: information.phone },
        numberOfDevices: {
          ...prevValue.numberOfDevices,
          value: information.number_of_devices,
        },
        numberOfindivisuals: {
          ...prevValue.numberOfindivisuals,
          value: information.number_of_individuals,
        },
        status: { ...prevValue.status, value: information.personal_status },
      };
    });
  }, [information]);

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
              name="displayName"
              className={classes.text}
              value={userInfo.displayName.value}
              onChange={handleUserChange}
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
              name="mobile"
              value={userInfo.mobile.value}
              className={classes.text}
              disableUnderline={true}
              onChange={handleUserChange}
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
            <NumericInput
              onChange={handleIndivisulaChange}
              min={0}
              max={50}
              value={userInfo.numberOfindivisuals.value}
              className={classes.inputNum}
              size="1"
              boxShadow="0 0 1px 1px #505050 inset, 1px 1px 5px -1px #505050"
              style={{
                wrap: {
                  outline: 'none',
                  background: '#505050',
                  padding: '2px 2.26ex 2px 2px',
                },
                input: {
                  outline: 'none',
                  color: '#FFFFFF',
                  padding: '0.1ex 1ex',
                  backgroundColor: '#505050',
                  textAlign: 'right',
                },
                'input:focus': {
                  outline: 'none',
                },
                arrowUp: {
                  borderBottomColor: '#00000',
                },
                arrowDown: {
                  borderTopColor: '#00000',
                  size: '2',
                },
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
              inputProps={{ name: 'status' }}
              value={userInfo.status.value}
              input={<Input />}
              onChange={handleUserChange}
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
            <NumericInput
              value={userInfo.numberOfDevices.value}
              min={0}
              max={50}
              onChange={handleDeviceChange}
              className={classes.inputNum}
              size="1"
              style={{
                wrap: {
                  background: '#505050',
                  padding: '2px 2.26ex 2px 2px',
                },
                input: {
                  outline: 'none',
                  color: '#FFFFFF',
                  padding: '0.1ex 1ex',
                  backgroundColor: '#505050',
                  textAlign: 'right',
                },
                arrowUp: {
                  borderBottomColor: '#000000',
                },
                arrowDown: {
                  borderTopColor: '#000000',
                  size: '2',
                },
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
