import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../Config/Config';
import PichinchaImage from '../assets/pichincha-removebg-preview.png';


export default function GaleriaScreen() {
  
  const [image, setImage] = useState('');

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  //   console.log(result);
  //   if (!result.cancelled) {
  //     setImage(result.assets[0].uri);
  //   }
  // };
  

  async function subir() {
    if (!image) {
      Alert.alert('Error', 'Debe seleccionar una imagen primero');
      return;
    }

    const response = await fetch(image);
    const blob = await response.blob();

    const storageRef = ref(storage, 'avatar/' + 'Temp');

    uploadBytes(storageRef, blob).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
    Alert.alert('Mensaje', 'Imagen subida con éxito');
  }

  return (
  
    <View style={styles.container}>
      <Image source={PichinchaImage} style={styles.logo} />
      <TouchableOpacity style={[styles.button, { backgroundColor: 'grey' }]} onPress={subir}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Transferencias</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'grey' }]}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Pagar Servicios</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'grey' }]}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Pagar Tarjetas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'grey' }]}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Todas las Operaciones</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  button: {
    width: 150,
    height: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain', // Ajusta el tamaño de la imagen mientras mantiene la relación de aspecto
    marginBottom: 20,
  },
});

