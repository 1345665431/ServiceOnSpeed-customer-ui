import React, { Component } from 'react'
import { View, ScrollView, Image, StyleSheet, Dimensions, Text, Animated, TouchableOpacity} from 'react-native';
import { Icon} from 'react-native-elements';
const { width } = Dimensions.get('window');
export default class Test extends Component {
  render() {
    return (
      <View>
        <Text>Used for Drawer Navigation Options : Refer & Earn, Support, About </Text>
      </View>
    )
  }
}
