import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native';
import Icon from '../components/CustomIcon';
import { createStackNavigator} from 'react-navigation';

//component
import WelcomePageContainer from '../containers/WelcomePageContainer';
import SelectVehicleContainer from '../containers/SelectVehicleContainer';
import ServiceBookContainer from '../containers/ServiceBookContainer';
import SelectPlaceContainer from '../containers/SelectPlaceContainer';
// import StatusBar from '../components/StatusBar';
// import NewStatusBar from '../components/NewStatusBar';
//Four images offers screens to add
import OfferPage from '../components/OfferPage';
//Four images offers screens to add
// import ProfileSection from '../components/ProfileSection';
// import JobCard from '../components/JobCard'

export default AppNavigator = createStackNavigator({
  WelcomePageScreen : {
    screen : WelcomePageContainer,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <TouchableOpacity style={{ left: 12, width: 35 }} activeOpacity={1} onPress={() => navigation.openDrawer()}>
          <Icon
              size={25}
              name="menu"
              color="#ffffff"
          />
        </TouchableOpacity>
  ),
  headerTitle: (
    <View style={{alignItems: 'center',justifyContent: 'center',width: "100%"}}>
      <Text
        style={{
          fontSize: 20,
          color: '#ffffff',
          fontWeight: 'bold',
      }}>Service On Speed  </Text>
    </View>
  ),
  headerRight: (
    <View style={{ width: 30, height: 30}}>
    </View>
),
headerStyle: {
  backgroundColor: '#015b63',
}
    }),
  } ,
  SelectVehicleScreen : SelectVehicleContainer,
  SelectPlaceScreen : SelectPlaceContainer,
  ServiceBookScreen : ServiceBookContainer,
  OfferScreen : OfferPage,
  // StatusBarScreen : StatusBar,
  // NewStatusBarScreen :NewStatusBar,
  // JobCardScreen : JobCard,
  // ProfileSectionScreen : ProfileSection
},{
  initialRouteName: 'WelcomePageScreen',
});
