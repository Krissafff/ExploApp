import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { useNavigation } from '@react-navigation/native';
import { Container, ImgPerfil, BotaoPerfil, TextPerfil, ImgMenu, ContainerText, ContainerBotao } from './styles';


export default function Header() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  return (
    <Container>
        <BotaoPerfil onPress={()=>{navigation.navigate('Perfil')}}>
          <ImgPerfil source={require('../../assets/images/user.jpeg')}/>
        </BotaoPerfil>
        
        <ContainerText>
          <TextPerfil>Bem vindo!</TextPerfil>
          <TextPerfil>{user.nome}</TextPerfil>
        </ContainerText>
        
        <BotaoPerfil style={{top: 10}} onPress={() => navigation.toggleDrawer()}>
          <ImgMenu source={require('../../assets/images/menu.png')}/>
        </BotaoPerfil>
    </Container>
  );
}