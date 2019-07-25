import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Keyboard,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Icon from '../components/CustomIcon';
import axios from 'axios';

class PhoneNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: ''
        };
    }
    // Regex validation for Phone Number : OnChange()
    validatePhone = (value) => {
        const regex = /^([0-9]{0,10})$/g;
        if(!regex.test(value)) {
            return;
        }
        this.setState({phoneNumber:value});
    }

    componentDidUpdate(nextProps){
        if(this.props.LoginCheck.resetVal !== nextProps.LoginCheck.resetVal) {
            this.setState({
                phoneNumber: ''
            })
        }
    }

    onSubmit = (async) => {
        Keyboard.dismiss();
        // Regular expression to validate for the Phone Number Field
        const RegPhoneNumber = /^((?!(0))[0-9]{10})$/g;
        if(!RegPhoneNumber.test(this.state.phoneNumber)) {
            alert("Please enter valid phone number");
            return;
        }

        //ajax call for phone number check needed
        axios.post('https://api.devduck.xyz/v1/users/otp',{phone:this.state.phoneNumber})
            .then((res) => {
                alert(res.data.otp);
                this.props.navigation.navigate('OtpLoginScreen',{phone:this.state.phoneNumber});
            }).catch(error => {
                alert("Something Went Wrong");
            })
    } 

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps='always' style={{backgroundColor:"#ffffff", paddingTop: 20}}>
                <View style={styles.inputWrapper}>
                    <Icon style={styles.inputIcon} name="mobile-number" color="#d8d8d8" size={22}/>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={10} value={this.state.phoneNumber}
                        placeholder="Mobile Number"
                        onChangeText={(text) => this.validatePhone(text)}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.onSubmit()}>
                        <Text style={styles.textStyle}>Login / SignUp</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
 const styles = StyleSheet.create({
    inputWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 3,
        borderColor: "#e5e5e5",
        paddingLeft: 5,
        borderRadius: 5,
    },
    inputIcon: {
        padding: 10, 
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 5,
        paddingBottom: 10,
        backgroundColor: '#fff',
        color: '#424242',
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius: 5,
    },
    textStyle: {
        fontSize:20,
	    color: '#ffffff',
	    textAlign: 'center'
    },
    buttonStyle: {
	    padding:10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20,
        width:200,
	    backgroundColor: '#015b63',
	    borderRadius:5
    }
});

const mapStateToProps = (state) => ({
    LoginCheck: state.LoginCheck
});

export default connect(mapStateToProps,null)(PhoneNumber);