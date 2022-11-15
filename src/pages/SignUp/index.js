import React, { useState, useContext } from 'react';
import { StyleSheet, Platform, ScrollView } from 'react-native';
import { AuthContext } from '../../context/auth';
import { Background, Icon, Decoration, Container, AreaInput, Input, Titulo,  Button, ButtonText } from './styles'; 

export default function SignUp() {
    
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [numero, setNumero] = useState('');

  const { signUp } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, nome, numero);
  }

  return (
    <Background>
      <ScrollView>
      <Container behaivor={Platform.OS === 'ios' ? 'padding' : ''} enabled>
      
        <Titulo>Crie a sua conta</Titulo>

        <Icon source={require('../../assets/images/user.png')} style={{top: 76}}/>
        <AreaInput>
          <Input 
          style={estilo.sombra}
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="none"
          value={nome}
          onChangeText={ (text) => setNome(text) }
          />
        </AreaInput>

        <Icon source={require('../../assets/images/telephone.png')} style={{top: 165}}/>
        <AreaInput>
          <Input 
          style={estilo.sombra}
          placeholder="Numero"
          autoCorrect={false}
          autoCapitalize="none"
          value={numero}
          keyboardType="numeric"
          onChangeText={ (text) => setNumero(text) }
          />
        </AreaInput>

        <Icon source={require('../../assets/images/email.png')}/>
        <AreaInput>
          <Input
          style={estilo.sombra}
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>

        <Icon source={require('../../assets/images/lock.png')} style={{top: 338}}/>
        <AreaInput>
          <Input
          style={estilo.sombra}
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          secureTextEntry={true}
          onChangeText={ (text) => setPassword(text) }
          />
        </AreaInput>

        <Button style={estilo.sombra} onPress={handleSignUp}>
          <ButtonText>CADASTRAR</ButtonText>
        </Button>
        

        
      </Container>
      </ScrollView>
      <Decoration source={require('../../assets/images/obj.png')}/>
      
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
