import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ListaServicos({data}) {
 return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.textos}>Máquina: {data.Marquina}</Text>
        <Text style={style.textos}>Data: {data.date}</Text>
      </View>
      <View style={style.div}/>
        <Text style={style.textos}>Encarregado: {data.Encarregado}</Text>
        <Text style={style.textos}>Localidade: {data.Localidade}</Text>
        <Text style={style.textos}>Horímetro: {data.Horimetro}</Text>
        <Text style={style.textos}>Defeitos: {data.Defeito}</Text>
        <Text style={style.textos}>Peças utilizadas: {data.Peças_Utilizadas}</Text>
        <Text style={style.textos}>Serviços realizados: {data.Serviços}</Text>
        <Text style={style.textos}>Serviços futuros: {data.Serviços_Futuros}</Text>
    </View>
  );
}

const style = StyleSheet.create({
    container:{
      flex:1,
      padding: 15,
      marginBottom: 8,
      marginEnd: 15,
      marginStart: 15,
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