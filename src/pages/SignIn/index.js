import React, {useState, useContext} from 'react';
import { StyleSheet, Platform } from 'react-native';
import { AuthContext } from '../../context/auth';
import { useNavigation } from '@react-navigation/native';
import { Background, Icon, ContainerCadastro, CadastroText, LinkCadastro, Decoration, Container, AreaInput, Input, Titulo, SubTitulo, Link, TextLink, Button, ButtonText } from './styles'; 

export default function SignIn() {

  const navigation = useNavigation();
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);
  
  function handleLogin(){
    signIn(email, password);
  }

  return (
    <Background>
      <Container behaivor={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <Titulo>Bem vindo!</Titulo>
        <SubTitulo>Acesse a sua conta para continuar.</SubTitulo>

        <Icon source={require('../../assets/images/email.png')}/>
        <AreaInput>
          <Input 
          style={estilo.sombra}
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ (text) => setEmail(text)}
          />
        </AreaInput>

        <Icon source={require('../../assets/images/lock.png')} style={{top: 302}}/>
        <AreaInput>
          <Input
          style={estilo.sombra}
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={ (text) => setPassword(text)}
          />
        </AreaInput>

        <Link>
          <TextLink>Esqueceu a senha?</TextLink>
        </Link>

        <Button style={estilo.sombra} onPress={handleLogin}>
          <ButtonText>ACESSAR</ButtonText>
        </Button>
        
        <ContainerCadastro>
          <TextLink>Não possui uma conta?</TextLink>
          <LinkCadastro  onPress={() => navigation.navigate('SignUp')}>
            <CadastroText>Cadastre-se!</CadastroText>
          </LinkCadastro>
        </ContainerCadastro>

        <Decoration source={require('../../assets/images/obj.png')}/>
      </Container>
    </Background>
  );
}

const estilo = StyleSheet.create({
  sombra:{
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  }
});
