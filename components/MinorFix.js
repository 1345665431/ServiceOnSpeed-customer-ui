import React, { Component } from 'react'
import { View, ScrollView, Image, StyleSheet,ImageBackground, Dimensions, Text, Animated, TouchableOpacity,AsyncStorage} from 'react-native';
const { width } = Dimensions.get('window');


export default class MinorFix extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor:"#e8e8e8"}}>
        <View style={{flex: 1}}>
        <View style={{flex: 1,marginTop:30,padding:10,flexDirection:"column",backgroundColor:"#ffffff",
             borderColor:"#e8e8e8",borderWidth:2}}>
<View style={{flex: 1,paddingLeft:10}}>
<Text style={{fontSize:20,color: "#000000",fontFamily:'OpenSansSemiBold'}}>
                Services Our Partner Provides
              </Text>
               
</View>
        
<View style={{flex: 1,paddingleft:10,marginBottom:10}}>                
<Text style={{fontSize:17,color: "#000000",fontFamily:'OpenSans',paddingTop:20}}>
               1.  On-spot Inspection By Repairmen
              </Text>
<Text style={{fontSize:17,color: "#000000",fontFamily:'OpenSans',paddingTop:20}}>
               2.  Minor Fixes For e.g Tyre Puncture,Battery Dead
              </Text>             
 <Text style={{fontSize:17,color: "#000000",fontFamily:'OpenSans',paddingTop:20}}>
               3. Resolve Lock Out Issues
              </Text> 
<Text style={{fontSize:17,color: "#000000",fontFamily:'OpenSans',paddingTop:20}}>
               4. Towing Services
</Text> 
<Text style={{fontSize:17,color: "#000000",fontFamily:'OpenSans',paddingTop:20}}>
               5. Another Alternative Transport
</Text> 
</View>
</View>
<View style={{flex: 1,height:50,backgroundColor:"#015b63",padding:10,marginTop:10}}>
        <Text style={{fontSize: 17,color: "#ffffff",}}>
                Rate Card
              </Text>


              </View>
              <View style={{flex:1,height:250,backgroundColor: '#d8d8d8'}} >
        <ImageBackground source={require("../assets/trial.jpeg")}
              style={{height: "100%", weight: "100%"}}
            >
</ImageBackground>
          
          </View>



      </View>
      </ScrollView>
    )
  }
}
