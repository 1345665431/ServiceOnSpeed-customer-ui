import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Icon from '../components/CustomIcon';

class KnowServices extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible: false,
    }
    
  }
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
        <View style={{justifyContent: 'center',
          alignItems: 'center',}}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
           Know Services
          </Text>
        </View>
    ),
  });
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  bookingDetails=()=>{
    this.setModalVisible(true);
  }
  knowService=(screenName)=>{
    this.props.navigation.navigate(screenName)
  }
  render() {
    return (
        <ScrollView style={{backgroundColor:"#e8e8e8"}}>
          <View style={{height: 200, backgroundColor:"red"}}>
            <ImageBackground source={require("../assets/hamburgerImages/IntroductoryKYS.png")}
              style={{height: "100%", weight: "100%"}}
            >
            </ImageBackground>
         </View>
         <View style={{
             width:"80%",
             backgroundColor:"#ffffff",
             marginLeft:35,
             top: -20,
             borderWidth:1,
             borderColor:"#e8e8e8",
         }}>
         <Text style={{
           color:"#000000",
           fontSize:13,
           padding:20,
           fontFamily:"OpenSansItalic"
         }}>"Either be a Part of it or Watch it Happen...."
         </Text>
         </View>
         <View style={{backgroundColor:"#ffffff",padding:10}}>
         <Text style={{
              fontSize:17,
              color:"#015b63",
              textAlign:"center",
              fontFamily:"OpenSansSemiBold"
                       }}>
       Our Variety Of Services
         </Text>

         </View>
     
        <TouchableOpacity onPress={()=>this.knowService("MinorFixScreen")}>
              <View style={{
            backgroundColor:"#ffffff",
            marginTop:20,
            padding:20, 
            flexDirection:"row",
            width:"100%"
    
         }}>
        <View style={{width:"20%",justifyContent:"center",alignItems:"center"}}><Image style={{
           width:50, 
           height:50,

         }}
         source={require("../assets/hamburgerImages/cars1.jpeg")}>

         </Image></View>
         <View style={{width:"70%"}}>
          <View style={{padding:10}}>
             <Text style={{fontSize:17,fontFamily:"OpenSansSemiBold"}}>BreakDown Services</Text></View>
           <View style ={{padding:10}}><Text style={{
             fontSize:15,fontFamily:"OpenSans" 
           }}>Lockout,Fuel Delivery </Text></View>
         </View>
         <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}><Icon  name="right-big" color="#d8d8d8" size={15}/></View>

      </View>
        
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>this.knowService("TyreScreen")}>
              <View style={{
            backgroundColor:"#ffffff",
            marginTop:20,
            padding:20, 
            flexDirection:"row",
            width:"100%"
    
         }}>
        <View style={{width:"20%",justifyContent:"center",alignItems:"center"}}><Image style={{
           width:50, 
           height:50,

         }}
         source={require("../assets/hamburgerImages/generalservicing.png")}>

         </Image></View>
         <View style={{width:"70%"}}>
          <View style={{padding:10}}>
             <Text style={{fontSize:17,fontFamily:"OpenSansSemiBold"}}>Cleaning Services</Text></View>
           <View style ={{padding:10}}><Text style={{
             fontSize:15,fontFamily:"OpenSans" 
           }}>Includes cleaning and spa services</Text></View>
         </View>
         <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}><Icon  name="right-big" color="#d8d8d8" size={15}/></View>

      </View>
        
         </TouchableOpacity>

         <TouchableOpacity onPress={()=>this.knowService("TyreScreen")}>
              <View style={{
            backgroundColor:"#ffffff",
            marginTop:20,
            padding:20, 
            flexDirection:"row",
            width:"100%"
    
         }}>
        <View style={{width:"20%",justifyContent:"center",alignItems:"center"}}><Image style={{
           width:50, 
           height:50,

         }}
         source={require("../assets/hamburgerImages/tyre_relacement.png")}>

         </Image></View>
         <View style={{width:"70%"}}>
          <View style={{padding:10}}>
             <Text style={{fontSize:17,fontFamily:"OpenSansSemiBold"}}>Tyre Replacement</Text></View>
           <View style ={{padding:10}}><Text style={{
             fontSize:15,fontFamily:"OpenSans" 
           }}>Includes cleaning and spa services</Text></View>
         </View>
         <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}><Icon  name="right-big" color="#d8d8d8" size={15}/></View>

      </View>
        
         </TouchableOpacity>


         <TouchableOpacity onPress={()=>this.knowService("TyreScreen")}>
              <View style={{
            backgroundColor:"#ffffff",
            marginTop:20,
            padding:20, 
            flexDirection:"row",
            width:"100%"
    
         }}>
        <View style={{width:"20%",justifyContent:"center",alignItems:"center"}}><Image style={{
           width:60, 
           height:60,

         }}
         source={require("../assets/hamburgerImages/cleaning.jpeg")}>

         </Image></View>
         <View style={{width:"70%"}}>
          <View style={{padding:10}}>
             <Text style={{fontSize:17,fontFamily:"OpenSansSemiBold"}}>Cleaning Services</Text></View>
           <View style ={{padding:10}}><Text style={{
             fontSize:15,fontFamily:"OpenSans" 
           }}>Includes cleaning and spa services</Text></View>
         </View>
         <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}><Icon  name="right-big" color="#d8d8d8" size={15}/></View>

      </View>
        
         </TouchableOpacity>

         <TouchableOpacity onPress={()=>this.knowService("TyreScreen")}>
              <View style={{
            backgroundColor:"#ffffff",
            marginTop:20,
            padding:20, 
            flexDirection:"row",
            width:"100%"
    
         }}>
        <View style={{width:"20%",justifyContent:"center",alignItems:"center"}}><Image style={{
           width:40, 
           height:40,

         }}
         source={require("../assets/hamburgerImages/minorfix.png")}>

         </Image></View>
         <View style={{width:"70%"}}>
          <View style={{padding:10}}>
             <Text style={{fontSize:17,fontFamily:"OpenSansSemiBold"}}>Minor Fix and Repair</Text></View>
           <View style ={{padding:10}}><Text style={{
             fontSize:15,fontFamily:"OpenSans" 
           }}>Includes cleaning and spa services</Text></View>
         </View>
         <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}><Icon  name="right-big" color="#d8d8d8" size={15}/></View>

      </View>
        
         </TouchableOpacity>

      

         <TouchableOpacity onPress={()=>this.knowService("MinorFixScreen")}>
              <View style={{
            backgroundColor:"#ffffff",
            marginTop:20,
            padding:20, 
            flexDirection:"row",
            width:"100%"
    
         }}>
        <View style={{width:"20%",justifyContent:"center",alignItems:"center"}}><Image style={{
           width:50, 
           height:50,

         }}
         source={require("../assets/hamburgerImages/wheelalignment.png")}>

         </Image></View>
         <View style={{width:"70%"}}>
          <View style={{padding:10}}>
             <Text style={{fontSize:17,fontFamily:"OpenSansSemiBold"}}>Minor Fix and Repair</Text></View>
           <View style ={{padding:10}}><Text style={{
             fontSize:15,fontFamily:"OpenSans" 
           }}>Includes cleaning and spa services</Text></View>
         </View>
         <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}><Icon  name="right-big" color="#d8d8d8" size={15}/></View>

      </View>
        
         </TouchableOpacity>


















       

      </ScrollView>
    );
  }
}



export default KnowServices;
 