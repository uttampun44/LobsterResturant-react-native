import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {

      const navigation = useNavigation()

    const signup = () => {
      Alert.alert("Welcome to signup screen")
    }

  return (
    <View style={loginStyle.container}>
      <Image source={require('../assets/images/login.png')} style={loginStyle.loginBg} />
      <View style={loginStyle.buttonContainer}>
        <Text style={loginStyle.loginHeading}>Get Started with Lobster</Text>
        <Image source={require('../assets/images/close.png')} style={loginStyle.icon} />

        <View style={loginStyle.signupText}>
          <Text style={loginStyle.signupText.firstText}>Don't have an account?</Text>
          <Text style={loginStyle.signupText.secondText} onPress={signup}>Signup Now</Text>
        </View>

        {/* login inputfield */}
        <View>
          <TextInput placeholder='Email or Phone Number' style={loginStyle.inputField} />
          <TextInput placeholder='Enter Password' style={loginStyle.inputField} />
          <Text style={loginStyle.forgotPassword}>Forgot Password ?</Text>
        </View>

        {/* login button */}
        <View>
            <TouchableOpacity style={loginStyle.loginButton.button}>
                <Text style={loginStyle.loginButton.text}>Log In</Text>
            </TouchableOpacity>
            <Text style={loginStyle.continue}>Or Continue</Text>
        </View>

   {/* facebooki login */}
        <View>
            <TouchableOpacity style={loginStyle.facebook.button}>
                <Icon name='facebook' size={20} color='#FFF' />
                <Text style={loginStyle.facebook.text}>continue with facebook</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const loginStyle = StyleSheet.create({
  container: {
    backgroundColor: "#FFD7CC",
    flex: 1,
    position: 'relative'
  },
  loginBg: {
    width: 330,
    height: 330,
    resizeMode: 'contain',
    marginLeft: 25,
  },
  buttonContainer: {
    backgroundColor: '#fff',
    height: 716,
    position: 'absolute',
    left: 0,
    top: 150,
    width: '100%',
    zIndex: 99,
    borderRadius: 30,
  },
  loginHeading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 2,
    paddingHorizontal: 16,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    position: 'absolute',
    right: 20,
    top: 30,
    borderRadius: 50,
    backgroundColor: '#9ca3af',
  },
  signupText: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'center',
  },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 12,

  },
  forgotPassword:{
    textAlign: 'right',
    paddingRight: 16
 },
  signupText: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 20,

  firstText: {
    color: '#8C9099',
    fontWeight: '400',
    marginRight: 16,
  },
  secondText: {
    color: '#323643',
    fontWeight: 700,
  }
 },
 loginButton:{
     button:{
        marginVertical: 20,
        backgroundColor: '#FE724C',
        padding: 15,
        width: '90%',
        paddingHorizontal: 20,
        borderRadius: 12,
        marginHorizontal: 16,
     },
    text:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    }
 },
 continue:{
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
    color: '#323643'
 },
 facebook:{
    button:{
        marginVertical: 20,
        backgroundColor: '#1877F2',
        padding: 15,
        width: '90%',
        paddingHorizontal: 20,
        borderRadius: 12,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 10
     },
    text:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    }
 }
});
