import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button} from 'react-native';

export default function App() {
  const [message, setMessage] = React.useState('');
  const[contador, setContador] = React.useState(0);
  const [updated, setUpdated] = React.useState(message);

  const cambiarContendio = (t) =>{
    setMessage(t)
    setContador(t.length)
  }
  const handleClick = () => {
    setUpdated(message);
    setMessage("")
    setContador(0)
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Ingrese su texto'
        onChangeText={text => cambiarContendio(text)}
        value={message}
      />
      <Text>{updated}</Text>
      <Text>Numero de letras:{contador}</Text>
      <Button onPress={handleClick} title="Presioname" style={styles}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input :{
    resizeMode: 'contain',
    borderWidth: 1,
  },
});
