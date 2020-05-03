import React from 'react';
import {
  Box, DataTable, Col, Button,
} from 'adminlte-2-react';

import { useState } from 'react';
import { useEffect } from 'react';

const MessageTable = ({user_id=null, client_id=null}) =>{ 

  console.log("client id", client_id);
  const [msgs, setMsgs] = useState([]);

  useEffect(() =>{
    let mounted=true;
    const isLN = localStorage.getItem('LoggedIn')
    let token = null;
    if(isLN){
      token = localStorage.getItem('token');
      console.log(token);
    }
      fetch('https://mutualfundcalculator.in/nodejsApp/messages',{
          method: 'post',
          headers: {'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + token},
          body: JSON.stringify({
            Uid: user_id
        })
      })
      .then(response => {
        return response.json();
      })
      .then(res =>{
        if(mounted){
          setMsgs(res);
          console.log(res);
        }
      })
    return () => mounted = false;
  },[user_id]);

      const responsiveColumns = [{ title: 'Message', data: 'message' },
        { title: 'Timestamp', data: 'sent_at' }];
        const responsiveData = msgs;
      
      return (
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
      )
}

export default MessageTable;
  