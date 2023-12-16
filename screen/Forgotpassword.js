import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  const navigation = useNavigation();

  const inputValue = {
    email: '',
    password: ''
  };

  const [inputVal, setVal] = useState(inputValue);

  // login button function
  const login = () => {

    if (inputVal.email === '') {
      setVal({ ...inputVal, message: "Please fill the email or phone number" });
    } else if (inputVal.password === '') {
      setVal({ ...inputVal, message: "Please fill the password" });
    } else {
      setVal({ ...inputVal, message: '' }); // Clear error message on successful login
      alert('Valid login credentials. Logging in...');
    }
  };

  // onchange input field
  const loginInput = (name) => (text) => {
    setVal({ ...inputVal, [name]: text, message: "" });
  };

  // forgot password
  const password = () => {
    navigation.navigate('Forgotpassword');
  };

  return (
    <View style={loginStyle.container}>
      <Image source={require('../assets/images/login.png')} style={loginStyle.loginBg} />
      <View style={loginStyle.buttonContainer}>
        <Text style={loginStyle.loginHeading}>Reset Password</Text>

        {/* login inputfield */}
        <View>
          <TextInput
            placeholder='Email or Phone Number'
            style={loginStyle.inputField}
            value={inputVal.email}
            onChangeText={loginInput('email')}
          />

           <Text style={loginStyle.errorText}>{inputVal.message ? "Please fill the email or phone number" : ""}</Text>

          <TextInput placeholder='Enter New Password' style={loginStyle.inputField} value={inputVal.password} secureTextEntry={true} onChangeText={loginInput('password')} />

          <Text style={loginStyle.errorText}>{inputVal.message ? "Please fill the password": ""}</Text>

        </View>

        {/* login button */}
        <View>
          <TouchableOpacity style={loginStyle.loginButton} onPress={login}>
            <Text style={loginStyle.loginButtonText}>Reset New Password</Text>
          </TouchableOpacity>
        </View>

        {/* facebook login */}

      </View>
    </View>
  );
}

const loginStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFD7CC',
    flex: 1,
    position: 'relative'
  },
  loginBg: {
    width: 330,
    height: 330,
    resizeMode: 'contain',
    marginLeft: 25
  },
  buttonContainer: {
    backgroundColor: '#fff',
    height: 716,
    position: 'absolute',
    left: 0,
    top: 150,
    width: '100%',
    zIndex: 99,
    borderRadius: 30
  },
  loginHeading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 2,
    paddingHorizontal: 16
  },
  signupText: {
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'center',
    marginLeft: 16
  },
  signupTextText: {
    color: '#8C9099',
    fontWeight: '400',
    marginRight: 16
  },
  signupTextLink: {
    color: '#323643',
    fontWeight: '700'
  },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 12
  },
  errorText: {
    color: '#FF0000',
    marginLeft: 16
  },
  forgotPassword: {
    textAlign: 'right',
    paddingRight: 16
  },
  loginButton: {
    marginVertical: 20,
    backgroundColor: '#FE724C',
    padding: 15,
    width: '90%',
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 16
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  continue: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
    color: '#323643'
  },
  facebookButton: {
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
  facebookButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  }
});
