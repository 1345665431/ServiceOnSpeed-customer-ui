import React from 'react'
import { View, Text} from 'react-native';
import Icon from '../components/CustomIcon';
import { createStackNavigator } from 'react-navigation';

//components
import PhoneNumber from '../components/PhoneNumber';
import RegistrationPage from '../containers/RegistrationPageContainer';
import OtpLogin from '../containers/OtpLoginContainer';

export default AuthNavigator = createStackNavigator({
    PhoneNumberScreen : {
        screen : PhoneNumber,
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
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Text
                        style={{
                            fontSize: 17,
                            color: '#ffffff',
                         
                            fontFamily:"OpenSansSemiBold"
                        }}>
                    Enter Your Mobile Number</Text>
                </View>
            ),
            headerStyle: {
                backgroundColor: '#015b63',
            }
        })
    },
    RegistrationPageScreen : {
        screen : RegistrationPage,
        navigationOptions: () => ({
            headerTitle: (
                <View style={{ justifyContent: 'center' }}>
                    <Text
                        style={{
                            fontSize: 20,
                            color: '#fff',
                            textAlign: 'center',
                            fontWeight: 'bold',
                        }}>
                        Register
                    </Text>
                </View>
            ),
            headerStyle: {
                backgroundColor: '#015b63',
            },
            headerTintColor: "#fff"
        })
    },
    OtpLoginScreen : {
        screen : OtpLogin,
        navigationOptions : () => ({
            headerTitle: (
                <View style={{ justifyContent: 'center' }}>
                    <Text
                        style={{
                            fontSize: 20,
                            color: '#fff',
                            textAlign: 'center',
                            fontWeight: 'bold',
                        }}>
                        Login
                    </Text>
                </View>
            ),
            headerStyle: {
                backgroundColor: '#015b63',
            },
            headerTintColor: "#fff"
        })
    }           
});