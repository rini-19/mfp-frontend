import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

import MessageTable from './MessageTable.component';

class Messages extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [{
        id: null,
        name: ''
      }]
      // messages: [{
      //   user_id: null,
      //   content: [{
      //     message: '',
      //     sent_at: ''
      //   }]
      // }]
    }
  }

  componentDidMount() {
    const isLN = localStorage.getItem('LoggedIn')
    let token = null;
    if(isLN){
      token = localStorage.getItem('token');
      console.log(token);
    }
    fetch('/users',{
        method: 'post',
        headers: {'Content-type': 'application/json',
                  'Authorization':'Bearer ' + token }
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
    let x = {};
    let data = [];
    res.forEach(r => {
      x = {
        id: r.fbid,
        name: r.name 
      }
      data.push(x);
    });
    this.setState({ users: data })
    console.log("user in loaduser",this.state.users);
    console.log(this.state.users[1].name);
  }

  render() {
    if(this.state.users[1]) {
      let {name} = this.state.users[1];
      console.log("user in render",name);
    }
    return (<Content title="Messages" subTitle="Getting started with adminlte-2-react" browserTitle="">
      <Row>
        <Col xs={12}>
          {
            this.state.users===undefined  ? 
            console.log(this.state.users):
                this.state.users.map ( ({id, name}, index) =>{
                  return(
                    <Box key={id} title={name} type="primary" collapsable={true} collapsed={true} > 
                      {console.log("user",id)}
                      <MessageTable user_id = {id} client_id = {this.props.clientID} len={this.state.users.length} />
                    </Box>
                  ) 
                }) 
          }
        </Col>
      </Row>
    </Content>
    );
  }
}

export default Messages;