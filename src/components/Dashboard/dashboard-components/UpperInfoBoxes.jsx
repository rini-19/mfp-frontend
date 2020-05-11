import React from 'react';
import { Col, Infobox } from 'adminlte-2-react';

const Data = [{
  icon: 'ion-ios-people-outline',
  color: 'aqua',
  number: '',
  text: 'CUMULATIVE USERS',
},
{
  icon: 'fab-google-plus-g',
  color: 'red',
  number: '',
  text: 'UNIQUE USERS TODAY',
},
{
  icon: 'ion-ios-cart-outline',
  color: 'green',
  number: '',
  text: 'TOTAL USERS TODAY',
},
{
  icon: 'ion-ios-people-outline',
  color: 'yellow',
  number: '',
  text: 'CUMULATIVE MESSAGES',
}];

class UpperInfoBoxes extends React.Component {

  constructor(){
    super();
    this.state = {
      data: Data
    }
  }

  componentDidMount(){
    const isLN = localStorage.getItem('LoggedIn')
    console.log('is logged in', isLN);
    let token = null;
    if(isLN){
      token = localStorage.getItem('token');
      console.log(token);
    }
    fetch('https://mutualfundcalculator.in/nodejsApp/infoBox',{
        method: 'post',
        headers: {'Content-type': 'application/json',
                  'Authorization': 'Bearer ' + token}
    })
    .then(response => {
      return response.json();
    })
    .then(res =>{
      this.loadInfoBoxData(res);
    });
  }

  loadInfoBoxData = (res) => {
    this.setState({
      data: [
        {
          icon: 'ion-ios-people-outline',
          color: 'aqua',
          number: res.usrCnt,
          text: 'CUMULATIVE USERS',
        },
        {
          icon: 'fab-google-plus-g',
          color: 'red',
          number: res.unqUsrCnt,
          text: 'UNIQUE USERS TODAY',
        },
        {
          icon: 'ion-ios-cart-outline',
          color: 'green',
          number: res.usrTodayCnt,
          text: 'TOTAL USERS TODAY',
        },
        {
          icon: 'ion-ios-people-outline',
          color: 'yellow',
          number: res.msgCnt,
          text: 'CUMULATIVE MESSAGES',
        }
      ]
    })
  }

  render() {
    return(
      this.state.data.map((props, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Col key={`upperInfoBox${index}`} xs={12} sm={6} md={3}>
          <Infobox {...props} />
        </Col>
      ))
    );
  }
}

export default UpperInfoBoxes;