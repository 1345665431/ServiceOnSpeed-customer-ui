import React from 'react'
import { View, Text} from 'react-native';
import Icon from '../components/CustomIcon';
import { createStackNavigator } from 'react-navigation';

//components
import Booking from '../components/Booking';
// import StatusBar from '../components/StatusBar';
import NewStatusBar from '../components/NewStatusBar';
import JobCard from '../components/JobCard';
import SelectPromo from '../components/SelectPromo';

export default BookingNavigator = createStackNavigator({
    BookingScreen : {
        screen : Booking,
        navigationOptions: ({ navigation }) => ({
            headerLeft: (
                <View style={{ left: 12 }}>
                    <Icon
                        size={25}
                        name="menu"
                        color="#ffffff"
                        onPress={() => navigation.openDrawer()}
                    />
                </View>
            ),
            headerTitle: (
                <View style={{justifyContent: 'center',
                    alignItems: 'center',}}>
                    <Text
                    style={{
                        fontSize: 20,
                        color: '#ffffff',
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}>
                    My Booking
                    </Text>
                </View>
            ),
           
        })
    },
    // StatusBarTracker: StatusBar,
    NewStatusBarScreen :NewStatusBar,
    JobCardScreen : JobCard,
    SelectPromoScreen : SelectPromo
})