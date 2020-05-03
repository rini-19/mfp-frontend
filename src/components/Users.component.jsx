import React, { Component } from 'react';

import {
  Content, Row, Box, DataTable, Col, Button,
} from 'adminlte-2-react';

class Users extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [{
        id: null,
        name: '',
        email:'',
        phone: null
      }]
    }
  }

  componentDidMount() {
    const isLN = localStorage.getItem('LoggedIn')
    console.log('is logged in', isLN);
    let token = null;
    if(isLN){
      token = localStorage.getItem('token');
      console.log(token);
    }
    fetch('https://mutualfundcalculator.in/nodejsApp/users',{
        method: 'post',
        headers: {'Content-type': 'application/json',
                  'Authorization': 'Bearer ' + token}
      //   body: JSON.stringify({
      //     token: token
      // })
    })
    .then(response => {
      return response.json();
    })
    .then(res =>{
      console.log(res);
      this.loadUser(res);
    });
  }

  loadUser = (res) =>{
    this.setState({ users: res })
    console.log('user array loaded',this.state.users)
  }

  render() {
    
    const responsiveColumns = [{ title: 'User ID', data: 'id' },
      { title: 'fbid', data: 'fbid' },
      { title: 'User Name', data: 'name' },
      { title: 'Email', data: 'email' },
      { title: 'Phone', data: 'phone' }];
    const responsiveData = this.state.users;
    console.log(responsiveData);

    return (
      <Content title="User Info">
        <Row>
          <Col xs={12}>
            <Box width="130px" >
              <DataTable
                columns={responsiveColumns.concat([{
                  title: 'Actions',
                  data: null,
                  render: () => <Button text="Action" className="on-click-event" />,
                }])}
                data={responsiveData}
                options={{

                }}
                onClickEvents={{
                  onClickEvent: (data, rowIdx, rowData) => {
                    debugger;
                  },
                }}
              />
            </Box>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default Users;