import axios from 'axios';

export const getAllUsersSuccess = (data) => ({
  type: 'GET_ALL_USERS_SUCCESS',
  data
});

export const deleteUserSuccess = (data) => ({
  type: 'DELETELL_USER_SUCCESS',
  data
});

export const addNewUserSuccess = (name, phone) => ({
  type: 'ADD_NEW_USER_SUCCESS',
  name,
  phone
});

export const toasterFail = (e) => ({
  type: 'FAIL_MESSAGE', e
});

export function getAllNames() {
  return function (dispatch) {
    axios.get('http://localhost:8080/items')
      .then((response) => {
      // handle success
        dispatch(getAllUsersSuccess(response.data));
        console.log(response.data);
      })
      .catch((error) => {
      // handle error
        dispatch(toasterFail({ msg: 'getallusers fail' }));
        console.log(error);
      })
      .then(() => {
      // always executed
      });
  };
}
export function addNewUser(newName, phone) {
  return function (dispatch) {
    axios.post('http://localhost:8080/items/addItem', {
      name: newName,
      phoneNum: parseInt(phone)
    })
      .then((response) => {
        // handle success
        dispatch(addNewUserSuccess(newName, phone));
        console.log(response);
      })
      .catch((error) => {
        // handle error
        dispatch(toasterFail({ msg: 'addNewUser fail' }));
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  };
}

export function deleteUserPhone(num, index) {
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin',
      'Access-Control-Allow-Methods': 'OPTIONS',
      'Content-Type': 'application/json'
    }
  };

  
  return function (dispatch) {
    axios.delete(`http://localhost:8080/items/${num}`, {}, { ...config })
      .then((result) => {
        console.log(result);
        dispatch(deleteUserSuccess(index));
      })
      .catch((error) => {
        console.log(error);
        dispatch(toasterFail({ msg: 'deleteuser fail' }));
      });    
  };
}
