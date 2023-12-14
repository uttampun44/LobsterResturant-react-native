import { useNavigation } from "@react-navigation/native";
import {Alert, View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";


export default function(){

      const navigation = useNavigation();

   const loginPage = () =>{
      navigation.navigate('Login');
    }

     return(
             <View style={homeStyle.container}>
                  <Image source={require('../assets/images/ResturantHomeLogo.png')} style={{ width: 330, height: 248, aspectRatio: 16 / 9, objectFit: 'contain'}} resizeMode="cover" />
                  <Text style={homeStyle.text}>Enjoy the best restuarants or get what you need from neadby stores, delivered</Text>
                  <TouchableOpacity style={homeStyle.button} onPress={loginPage}>
                    <Text style={homeStyle.buttonText}>Get Started</Text>
                 </TouchableOpacity>
             </View>
     )
}

const homeStyle =  StyleSheet.create({
    container:{
        flex: 1,
        paddingVertical: 100,
        alignItems: "center",
        backgroundColor: '#fff'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
        paddingHorizontal: 12,
        marginVertical: 50
    },
    button:{
      marginVertical: 20,
      backgroundColor: '#FE724C',
      padding: 15,
      width: '90%',
      paddingHorizontal: 20,
      borderRadius: 12
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    }
})