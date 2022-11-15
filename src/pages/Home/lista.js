import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Lista({data}) {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.textos}>Máquina: {data.Maquina}</Text>
        <Text style={style.textos}>Data: {data.date}</Text>
      </View>
      <View style={style.div}/>
        <Text style={style.textos}>Encarregado: {data.Encarregado}</Text>
        <Text style={style.textos}>Localidade: {data.Localidade}</Text>
    </View>
  );
}

const style = StyleSheet.create({
    container:{
      padding: 15,
      margin:10,
      backgroundColor: '#f8f7ff',
      borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 6,
    },
    textos:{
      color: '#404258',
      fontSize: 18,
      margin: 8,
    },
    header:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    div:{
      height:1,
      width:'96%',
      left: 8,
      backgroundColor: '#ddd'
    }
  })