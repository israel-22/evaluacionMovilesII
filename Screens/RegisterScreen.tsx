import {Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../Config/Config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function RegisterScreen({navigation}:any) {
  const [correo, setCorreo] = useState('')
  const [clave, setClave] = useState('')
  const [usuario, setUsuario] = useState('')
  const [id, setId] = useState('')
//registro
function register(){
  createUserWithEmailAndPassword(auth, correo, clave)// autenfificar id y usuario
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    navigation.navigate('Login')
    setCorreo('');
    setClave('');
    setUsuario('');
    setId('')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    let mensaje=""
    let descripcion=""
    switch (errorCode) {
      case "auth/missing-email":
          mensaje="Correo Invalido"
          descripcion="Error de correo electronico, revise sus credenciales"
        
        break;
    case "auth/missing-password":
      mensaje="Contraseña incorrecta"
          descripcion="Error de contraseña, revise sus credenciales"
     break;
      default:
            mensaje="Error de registro"
          descripcion="revise sus credenciales"
        break;
    }    
    Alert.alert(mensaje,descripcion);
    // console.log(errorCode,errorMessage)
    // ..
  });
}
  return (
    <View style={styles.container}>

    <Text style={styles.title}>Registrate</Text>

    <TextInput placeholder='Ingrese correo' style={styles.input}
    onChangeText={(texto)=>(setCorreo(texto))}
      keyboardType='email-address'
      //value={correo}
    /> 

    <TextInput placeholder='Ingrese contraseña' style={styles.input}
        onChangeText={(texto)=>(setClave(texto))}
        //value={clave}
    />
    <TextInput placeholder='Ingrese usuario' style={styles.input}
        onChangeText={(texto)=>(setUsuario(texto))}
        //value={usuario}
    />
    <TextInput placeholder='Ingrese numero de cedula' style={styles.input}
        onChangeText={(texto)=>(setId(texto))}
        //value={id}
    />
     
   <TouchableOpacity style={styles.btn} onPress={()=>register()}>
      <Text style={styles.btnTxt}>Registrarse</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.btnR} onPress={()=>navigation.navigate('Welcome')}>
        <Text style={styles.btnTxt}>Regresar</Text>
      </TouchableOpacity>

  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green',
      width:150,
      height:45,
  },
  btnTxt:{
color:'white'
  },
  input:{
    backgroundColor:'white',
    width:200,
    height:50,
    marginBottom:8,
    padding:8
  },
  title:{
    fontSize:25,
    fontWeight:'bold',
    marginBottom:10
  },
  btnR: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#68ae56',
    width: 150,
    height: 45,
    marginTop:10,
    marginBottom:20

  },
});