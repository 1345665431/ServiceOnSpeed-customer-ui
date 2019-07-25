import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Button,
  ImageBackground,
} from 'react-native';
import axios from 'axios';


class Offers extends Component {
  constructor(props){
    super(props);
    this.state={
      dataPromoCodes : [],
      customerToken : null,
      bookingId: props.navigation.getParam('bookingId') 
    } 
  }

  static navigationOptions = ({ navigation }) => ({
    headerTintColor: '#fff',
    headerTitle: (
      <View style={{justifyContent: 'center',
        alignItems: 'center',}}>
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Offers
        </Text>
      </View>
  ),
    headerStyle: {
      backgroundColor: '#015b63',
    },
  });
 
  componentWillMount(){
   this.getDataForPromoCodes(); 
  }

  // Get the details for the Prmomo Codes
  getDataForPromoCodes = () => {
    AsyncStorage.getItem("customerToken").then((token)=>{
      this.setState({
        customerToken : token
      }, () => {
        this.getDetailsPromoCode();
      })
    })
  }

  //To get the Details for the PromoCode
  getDetailsPromoCode = () => {
    const URL = "https://api.devduck.xyz/v1/coupons/list?token=" + this.state.customerToken;
    // alert(URL)
    axios.get(URL).then((response) => {
      this.setState({
        dataPromoCodes : response.data
      }, () => {
        // alert(JSON.stringify(this.state.dataPromoCodes))
        alert(this.state.bookingId)
      })
    }).catch((response) => {
      alert('In Catch' + (response))
      console.log(response)
      });
  }
// To apply the coupon
  applyCoupon = (couponId) => {
    axios.post("https://api.devduck.xyz/v1/coupons/apply",{
      token: `${this.state.customerToken}`,
      bookingId: this.state.bookingId,
      couponId: couponId
      }).then(() => {
      // this.props.navigation.goBack();
      alert(JSON.stringify(response))
  }).catch((response) => {
      alert('In Catch Enter' + (response))
  });
  // alert(`${this.state.customerToken}`)
  }

  render() {
    return (
      <React.Fragment>
          <ScrollView style={{padding:10}}>
              <View style={{alignItems:"center",marginTop:20}}>
                 <Text style={{fontSize:22,fontWeight:"bold"}}>We care for your pocket too!</Text>
              </View>
              <View>
              </View >
              <View style={{alignItems:"center",marginTop:40}}>
                 <Image source={require("../assets/hamburgerImages/customimagepng.png")} />
              </View>
              <View style={{alignItems:"center",marginTop:20}}>
                 <Text style={{fontSize:17,fontWeight:"bold"}}>Exclusive Offers</Text>
              </View>
              {
                this.state.dataPromoCodes.map((promo, index) => {
                  return(
                    <React.Fragment key= {index}>
                      <View style={{borderBottomWidth:2,borderColor:"#dcdcdc",marginTop:15}}></View>
                      <View style={{marginTop:20,height:100,width:"100%",backgroundColor:"#f8f8f8",alignItems:"center",justifyContent:"center"}}>
                      <Text style={{color:"#000000"}}>{promo.code}</Text>
                      <Text style={{color:"#000000"}}>{promo.desciption}</Text>
                      </View>
                        <TouchableOpacity onPress = {() => this.applyCoupon(promo.id)} style={{marginTop:20,marginLeft: 10,height:40,width:100,backgroundColor:"#015b63",alignItems:"center",justifyContent:"center"}}>
                        <Text style={{color:"#FFFFFF"}}>Select</Text>
                        </TouchableOpacity>
                    </React.Fragment>
                  )
                })
              }
              {/* <View style={{marginTop:20,height:100,width:"100%",backgroundColor:"#f8f8f8",alignItems:"center",justifyContent:"center"}}>
              <Text style={{color:"#000000"}}>SAVE 15</Text>
              </View>
              <TouchableOpacity style={{marginTop:20,marginLeft: 10,height:40,width:100,backgroundColor:"#015b63",alignItems:"center",justifyContent:"center"}}>
              <Text style={{color:"#ffffff"}}>SAVE 15</Text>
              </TouchableOpacity>
              <View style={{marginTop:20,height:100,width:"100%",backgroundColor:"#f8f8f8",alignItems:"center",justifyContent:"center"}}>
              <Text style={{color:"#000000"}}>SAVE 15</Text>
              </View>
              <TouchableOpacity style={{marginTop:20,marginLeft: 10,height:40,width:100,backgroundColor:"#015b63",alignItems:"center",justifyContent:"center"}}>
              <Text style={{color:"#ffffff"}}>SAVE 15</Text>
              </TouchableOpacity> */}
          </ScrollView>
      </React.Fragment>
    );
  }
}

export default Offers;
