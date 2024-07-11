import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../Config/Config';

// Importa la imagen desde la carpeta assets
import PichinchaImage from '../assets/dolar.png';

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
      <Image source={{ uri: image }} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={subir}>
        <Text style={styles.buttonText}>id Operacion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Monto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tipo Operacion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Comentario</Text>
      </TouchableOpacity>
      <View> 
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText2}>EJECUTAR</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow', // Color de fondo para la vista
    padding: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: -90,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  button2: {
    width: '100%',
    height: 50,
    backgroundColor: '#68ae56',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  buttonText2: {
    color: 'white',
    fontSize: 18,
  },
});
