import React, {useContext} from 'react';
import { StyleSheet } from 'react-native';
import { Background,  Botao, ImgPerfil, Titulo, Dados, Div, TextBotao } from './styles';
import { AuthContext } from '../../context/auth';

export default function Perfil() {

 const { user, signOut } = useContext(AuthContext);

 return (
    <Background>
        
    <ImgPerfil source={require('../../assets/images/user.jpeg')} />   
    <Titulo>Nome</Titulo>
    <Dados>{user.nome}</Dados>

    <Div/>


    <Titulo>Email</Titulo>
    <Dados>{user.email}</Dados>

    <Div/>

    <Titulo>Telefone</Titulo>
    <Dados>{user.numero}</Dados>

    <Botao onPress={ () => signOut() } style={estilo.sombra}>
    <TextBotao style={{color: '#FFF'}}>Sair da conta</TextBotao>
    </Botao>

    </Background>
  );
}

const estilo = StyleSheet.create({
    sombra:{
        elevation: 5
    }
})