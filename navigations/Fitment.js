import React, { Component } from 'react'
import { View, ScrollView, Image, StyleSheet, Dimensions, Text, Animated, TouchableOpacity} from 'react-native';
import { Icon} from 'react-native-elements';
const { width } = Dimensions.get('window');
export default class Fitment extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerIcon : ({tintColor}) => (
      <Icon size={15} name="bell"  type="font-awesome" color={tintColor} />
    )
});
  render() {
    return (
      <View>
        <Text>Accessories and Fitment</Text>
      </View>
    )
  }
}
