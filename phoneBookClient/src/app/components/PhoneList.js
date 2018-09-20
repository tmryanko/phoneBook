import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import * as GetUsersActions from '../actions/GetUsersActions';
import '../style/nav.sass';

class PhoneList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      phoneNumber: ''
    };
  }

  componentDidMount() {
    this.props.actions.getAllNames();
  }

  onAddUser = () => {
    this.props.actions.addNewUser(this.state.userName, this.state.phoneNumber);
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  deleteUser = (phone, index) => {
    this.props.actions.deleteUserPhone(phone, index);
  }

  renderBookNames = () => {
    return this.props.users.userTable.map((item, index) => {
      const num = index;

      return (
        <tr key={ num }>
          <td>{index}</td>
          <td>
            {item.name} 
          </td>
          <td>
            {item.phoneNum}
          </td>
          <td>
            <Button onClick={ () => this.deleteUser(item.phoneNum, index) }>Delete</Button>
          </td>
          <td>
            <Button onClick={ () => this.deleteUser(item.phoneNum, index)  }>Edit</Button>
          </td>
        </tr>
      );
    });
  }


  render() { // notes: change all elements to DIV
    return (
      <div >
        <div>
          <input type="text" name="userName" value={ this.state.userName } onChange={ this.handleChange }/>  
          <input type="text" name="phoneNumber" value={ this.state.phoneNumber } onChange={ this.handleChange }/>  
          <Button onClick={ () => this.onAddUser() }>add</Button>
        </div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.renderBookNames()}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const users = Object.assign({}, state.userReducer);

  return {
    users
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...GetUsersActions }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
PhoneList.defaultProps = {
  users: null
};
  
PhoneList.propTypes = {
  actions: PropTypes.object.isRequired,
  users: PropTypes.object
};
