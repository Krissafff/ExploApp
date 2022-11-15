import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header'
import { Background, ContainerServico, ContainerTextos, Titulo, LinkText, Link } from './styles';
import { FlatList } from 'react-native';
import firebase from '../../services/firebaseConnection';
import Lista from './lista';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation();
  const [lista, setLista] = useState([]);

  useEffect(()=> {
    async function dados(){
      await firebase.database().ref('Serviços').limitToLast(5).on('value', (snapshot)=>{
        setLista([]);

        snapshot.forEach((childItem) =>  {
          let data = {
            key: childItem.key,
            Encarregado: childItem.val().Encarregado,
            Maquina: childItem.val().Maquina,
            date: childItem.val().date,
            Localidade: childItem.val().Localidade,
          };
          setLista(oldArray => [...oldArray, data]);
        })
      })
    }
    dados();
  },[]);

  return (
    <Background>
      <Header/>

      <ContainerServico>
        <ContainerTextos>
          <Titulo>Serviços</Titulo>
          <Link onPress={() => navigation.navigate('Todos os Serviços')}>
            <LinkText>Veja mais</LinkText>
          </Link>
        </ContainerTextos>

        <FlatList
        keyExtractor={item => item.key}
        data={lista}
        renderItem={({item}) => ( <Lista data={item}/>)}
        style={{marginBottom: 20}}
        />

      </ContainerServico>
    </Background>
  );
}