import { Alert, Button, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Config/Config';


export default function WelcomeScreen({ navigation }: any) {
  const [correo, setCorreo] = useState('')
  const [clave, setClave] = useState('')
function singIn(){
  signInWithEmailAndPassword(auth,correo, clave)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigation.navigate('Drawer')
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
            mensaje="Error de Ingreso"
          descripcion="revise sus credenciales"
        break;
    }    
    Alert.alert(mensaje,descripcion);
  });
}
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome</Text>
      
      <TextInput placeholder='Ingrese correo' style={styles.input} 
      onChangeText={(texto)=>(setCorreo(texto))}
      keyboardType='email-address'
      />
      <TextInput placeholder='Ingrese contraseña' style={styles.input} 
     onChangeText={(texto)=>(setClave(texto))}/>
      
      <TouchableOpacity style={styles.btnI} onPress={()=>singIn()}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnR} onPress={()=>navigation.navigate('Registro')}>
        <Text style={styles.btnTxt}>Registrate</Text>
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
  btnI: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 45,
    backgroundColor: '#7fb4f5',
    marginBottom: 5
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
  btnTxt: {
    color: 'black'
  },
  input: {
    backgroundColor: 'white',
    width: 200,
    height: 50,
    marginBottom: 8,
    padding: 8
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10
  }
});