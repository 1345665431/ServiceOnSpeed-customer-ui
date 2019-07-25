import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native';
import Icon from '../components/CustomIcon';
import { createStackNavigator } from 'react-navigation';

//components
import KnowServices from '../components/KnowServices';
import MinorFix from '../components/MinorFix';
import DentPaint from '../components/DentPaint';
import SpaCleaning from '../components/SpaCleaning';
import Tyre from '../components/Tyre';
import WheelAlignment from '../components/WheelAlignment';
import Rsa from '../components/Rsa';
import Fitment from '../components/Fitment';

export default KnowYourServices = createStackNavigator({
    KnowServicesScreen : {
        screen : KnowServices,
        navigationOptions: ({ navigation }) => ({
               headerStyle: {
                 backgroundColor: '#015b63',
               },
               headerLeft: (
                <View style={{ left: 12 }}>
                    <Icon
                        size={25}
                        name="menu"
                        color="#ffffff"
                        onPress={() => navigation.openDrawer()}
                    />
                </View>
            )
        })
    }, 
    MinorFixScreen : {
        screen : MinorFix,
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
                        This
                    </Text>
                </View>
            ),
            headerStyle: {
                backgroundColor: '#015b63',
            },
            headerTintColor: "#fff"
        })
    },
    DentPaintScreen : {
        screen : DentPaint,
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
    },
    SpaCleaningScreen : {
        screen : SpaCleaning,
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
    },
    TyreScreen : {
        screen : Tyre,
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
    },
    WheelAlignmentScreen : {
        screen : WheelAlignment,
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
    },
    RsaScreen : {
        screen : Rsa,
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
    },
    FitmentScreen : {
    screen : Fitment,
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
})