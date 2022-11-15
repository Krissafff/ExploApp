import React, { useState, useEffect } from 'react';
import { FlatList, Button } from 'react-native';
import { Background, Container, } from './styles';
import firebase from '../../services/firebaseConnection';
import ListaServicos from './listaTodos';

export default function TodosServicos() {
  const [lista, setLista] = useState([]);

  useEffect(()=> {
    async function dados(){
      await firebase.database().ref('Serviços').limitToLast(5).on('value', (snapshot)=>{
        setLista([]);

        snapshot.forEach((childItem) =>  {
          let data = {
            key: childItem.key,
            Defeito: childItem.val().Defeito,
            Encarregado: childItem.val().Encarregado,
            date: childItem.val().date,
            Horimetro: childItem.val().Horimetro,
            Localidade: childItem.val().Localidade,
            Maquina: childItem.val().Maquina,
            Peças_Utilizadas: childItem.val().Peças_Utilizadas,
            Serviços: childItem.val().Serviços,
            Serviços_Futuros: childItem.val().Serviços_Futuros,
          };
          setLista(oldArray => [...oldArray, data]);
        })
      })
    }
    dados();
  },[]);

  return (
   <Background>
      <Container>
        <FlatList
        keyExtractor={item => item.key}
        data={lista}
        renderItem={({item}) => ( <ListaServicos data={item}/>)}
        />
      </Container>
   </Background>
  );
}