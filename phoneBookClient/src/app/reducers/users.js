
const userReducer = (state = { userTable: [], userTable1: [] }, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS_SUCCESS': {
      return Object.assign({}, {
        userTable: [...action.data]
      });
    }
    case 'DELETELL_USER_SUCCESS': {
      return Object.assign({}, {
        userTable1: [...state.userTable.splice(action.data, 1)],
        userTable: [...state.userTable1]
      });     
    }
    case 'ADD_NEW_USER_SUCCESS': {
      return Object.assign({}, {
        userTable1: [...state.userTable.push({ name: action.name, phone: action.phone })],
        userTable: [...state.userTable1]
      });     
    }
    default:
      return state;
  }
};
  
export default userReducer;
