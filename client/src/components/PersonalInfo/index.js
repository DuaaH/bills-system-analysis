import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {
  Grid,
  Box,
  Typography,
  Input,
  NativeSelect,
  InputLabel,
  FormControl,
  FormHelperText,
  Button,
} from '@material-ui/core';
import LoaderProgress from '../../common-components/LoaderProgress';
import Styles from './style';
import Group from '../../assets/Group.svg';
import NumericInput from 'react-numeric-input';
import Menu from '../../common-components/Menu';

const PersonalInfo = (props) => {
  const classes = Styles();
  const [information, setInformation] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [address, setAllAddress] = useState([]);
  const [towns, setAllTowns] = useState([]);
  const [userInfo, setuserInfo] = useState({
    cityName: {
      value: information.city,
      lable: 'name of city',
      message: '',
      isValid: true,
      isRequired: true,
      type: 'dropDown',
    },
    townName: {
      value: information.town,
      lable: ' town name ',
      message: '',
      isValid: true,
      isRequired: true,
      type: 'dropDown',
    },
    displayName: {
      value: information.display_name,
      lable: ' user name',
      message: '',
      isValid: true,
      isRequired: true,
      type: 'text',
    },
    mobile: {
      value: information.phone,
      lable: ' mobile number',
      message: '',
      isValid: true,
      isRequired: true,
      type: 'number',
    },
    numberOfDevices: {
      value: information.number_of_devices,
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
      lable: 'the status',
      message: '',
      isValid: true,
      isRequired: true,
      type: 'dropDown',
    },
  });

  const status = ['', 'single', 'Married'];

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
  const addressTypeHandleChange = (event) => {
    handleUserChange(event);
    axios
      .get(`/api/city/${event.target.value}`)
      .then((res) => {
        setAllTowns(res.data.Result);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err && err.response && err.response.data) {
          swal('Error', err.response.data.message, 'error');
        }
        setIsLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formValid = true;
    setIsLoading(true);
    const inputData = { ...userInfo };
    for (const control of Object.keys(inputData)) {
      const input = inputData[control];
      if (
        input.isRequired &&
        (input.type === 'text' ||
          input.type === 'dropDown' ||
          input.type === 'number')
      ) {
        if (!input.value) {
          input.message =
            input.type === 'dropDown'
              ? `Please choose  ${input.lable} from the option`
              : `Please Enter ${input.lable}`;
          input.isValid = false;
          formValid = false;
        } else {
          input.message = '';
          input.isValid = true;
        }
      }
    }
    setuserInfo(inputData);
    if (!formValid) {
      setIsLoading(false);
      return;
    }

    const data = {
      display_name: userInfo.displayName.value,
      phone: userInfo.mobile.value,
      number_of_individuals: userInfo.numberOfindivisuals.value,
      number_of_devices: userInfo.numberOfDevices.value,
      personal_status: userInfo.status.value,
      city: userInfo.cityName.value,
      town: userInfo.townName.value,
    };
    axios
      .patch(`/api/update`, data)
      .then((res) => {
        setIsLoading(false);
        swal('Good Job', 'The data was suucceffuly updated ', 'success');
      })
      .catch((err) => {
        if (err && err.response && err.response.data) {
          swal('Error', err.response.data.message, 'error');
        }
        setIsLoading(false);
      });
  };

  useEffect(() => {
    axios.get('/api/profile').then((res) => {
        setInformation(res.data.Result);
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      if (err && err.response && err.response.data) {
        props.history.push('/login');
      }
    });
    axios
      .get(`/api/address`)
      .then((res) => {
        setAllAddress(res.data.Result);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err && err.response && err.response.data) {
          swal('Error', err.response.data.message, 'error');
        }
        setIsLoading(false);
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
        townName: { ...prevValue.townName, value: information.town },
        cityName: { ...prevValue.cityName, value: information.city },
      };
    });
  }, [information]);
  return (
    <Box component="div" p={3} width={1}>
      <LoaderProgress isLoading={isLoading} />
      <Grid container item sx={12}>
        <Menu title="Profile" />
        <Grid item container xs={12} justify="space-evenly" direction="row">
          <img src={Group} alt="user-profile" className={classes.image} />
        </Grid>

        <Grid item container xs={12}>
          <Grid item xs={6}>
            <InputLabel className={classes.root}> Name</InputLabel>
          </Grid>

          <Grid  xs={6} className={classes.gridPosition}>
            <Input
              name="displayName"
              className={classes.text}
              value={userInfo.displayName.value}
              error={!userInfo.displayName.isValid}
              onChange={handleUserChange}
              inputProps={{ style: { textAlign: 'right' } }}
              disableUnderline={true}
            />
          </Grid>
        </Grid>
        <Grid xs={12} item  className={classes.errorTitle} >
          <FormControl error >
            <FormHelperText className={classes.textError}>
              {userInfo.displayName.message}
            </FormHelperText>
          </FormControl>
        </Grid>
        <hr className={classes.LineHorizantal} />

        <Grid item container xs={12}>
          <Grid item xs={6}>
            <InputLabel className={classes.root}> Mobile Number </InputLabel>
          </Grid>
          <Grid item xs={6} className={classes.gridPosition}>
            <Input
              name="mobile"
              value={userInfo.mobile.value}
              className={classes.text}
              disableUnderline={true}
              error={!userInfo.mobile.isValid}
              onChange={handleUserChange}
              inputProps={{ style: { textAlign: 'right' } }}
            />
          </Grid>
        </Grid>
        <Grid xs={12}   item className={classes.errorTitle}>
          <FormControl error >
            <FormHelperText className={classes.textError}>
              {userInfo.mobile.message}
            </FormHelperText>
          </FormControl>
        </Grid>
        <hr className={classes.LineHorizantal} />

        <Grid item container xs={12}>
          <Grid item xs={6}>
            <InputLabel className={classes.root}> Address </InputLabel>
          </Grid>

          <Grid item xs={6} className={classes.addPosition}>
            <InputLabel className={classes.labelStyle}>city</InputLabel>
            <NativeSelect
              inputProps={{ style: { textAlign: 'right' } }}
              className={classes.inputText}
              value={userInfo.cityName.value}
              error={!userInfo.cityName.isValid}
              onChange={addressTypeHandleChange}
              disableUnderline={true}
              inputProps={{
                name: 'cityName',
              }}
              input={<Input />}
            >
              <option
                value=""
                style={({ background: '#505050' })}
              ></option>
              {address.map((type, index) => (
                <option
                  key={index}
                  value={type.city}
                  style={{ background: '#505050' }}
                >
                  {type.city}
                </option>
              ))}
            </NativeSelect>
            <Grid
              xs={12}
              item
             
              className={classes.errorTitle}
              justify="flex-start"
            >
              <FormControl error className={classes.errorTitle}>
                <FormHelperText className={classes.textError}>
                  {userInfo.cityName.message}
                </FormHelperText>
              </FormControl>
            </Grid>

            <InputLabel className={classes.labelStyle}>Town</InputLabel>
            <NativeSelect
              className={classes.inputText}
              name=" townName"
              value={userInfo.townName.value}
              error={!userInfo.townName.isValid}
              onChange={addressTypeHandleChange}
              inputProps={{ style: { textAlign: 'right' } }}
              disableUnderline={true}
              inputProps={{
                name: 'townName',
              }}
              input={<Input />}
            >
              <option value="" style={{ background: '#505050' }}>
                {userInfo.townName.value}
              </option>
              {towns.map((type, index) => (
                <option
                  key={index}
                  value={type.town}
                  style={{ background: '#505050' }}
                >
                  {type.town}
                </option>
              ))}
            </NativeSelect>
          </Grid>
        </Grid>
        <Grid xs={12}  item className={classes.errorTitle} >
          <FormControl error >
            <FormHelperText className={classes.textError}>
              {userInfo.townName.message}
            </FormHelperText>
          </FormControl>
        </Grid>

        <hr className={classes.LineHorizantal} />

        <Grid item container xs={12}>
          <Grid item xs={6}>
            <InputLabel className={classes.root}>
              {' '}
              Number of indivisuals{' '}
            </InputLabel>
          </Grid>
          <Grid item xs={6} className={classes.gridPosition}>
            <NumericInput
              onChange={handleIndivisulaChange}
              min={0}
              max={50}
              value={userInfo.numberOfindivisuals.value}
              error={!userInfo.numberOfindivisuals.isValid}
              className={classes.inputNum}
              size="1"
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

        <Grid xs={12} item  className={classes.errorTitle} >
          <FormControl error >
            <FormHelperText className={classes.textError}>
              {userInfo.numberOfindivisuals.message}
            </FormHelperText>
          </FormControl>
        </Grid>
        <hr className={classes.LineHorizantal} />
        <Grid item container xs={12}>
          <Grid item xs={6}>
            <InputLabel className={classes.root}> status </InputLabel>
          </Grid>
          <Grid item xs={6} className={classes.gridPosition}>
            <NativeSelect
              className={classes.inputText}
              inputProps={{ name: 'status' }}
              value={userInfo.status.value}
              error={!userInfo.status.isValid}
              input={<Input />}
              onChange={handleUserChange}
              disableUnderline={true}
            >
              {status.map((personStatus) => (
                <option
                  style={{ background: '#505050' }}
                  key={personStatus}
                  value={personStatus}
                >
                  {personStatus}
                </option>
              ))}
            </NativeSelect>
          </Grid>
        </Grid>
        <Grid xs={12} item  className={classes.errorTitle} >
          <FormControl error >
            <FormHelperText className={classes.textError}>
              {userInfo.status.message}
            </FormHelperText>
          </FormControl>
        </Grid>
        <hr className={classes.LineHorizantal} />

        <Grid item container xs={12}>
          <Grid item xs={6}>
            <InputLabel className={classes.root}>
              {' '}
              Number of devices{' '}
            </InputLabel>
          </Grid>
          <Grid item xs={6} className={classes.gridPosition}>
            <NumericInput
              value={userInfo.numberOfDevices.value}
              min={0}
              max={50}
              error={!userInfo.numberOfDevices.isValid}
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

        <Grid xs={12} item className={classes.errorTitle} >
          <FormControl error >
            <FormHelperText className={classes.textError}>
              {userInfo.numberOfDevices.message}
            </FormHelperText>
          </FormControl>
        </Grid>

        <hr className={classes.LineHorizantal} />
        <Grid item container xs={6} className={classes.Button}>
          <Button className={classes.updateButt} onClick={handleSubmit}>
            Update
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInfo;
