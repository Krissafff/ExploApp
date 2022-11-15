import { Touchable } from 'react-native';
import styled from 'styled-components';

export const Background = styled.View`
flex: 1;
background-color: #FFF;
`;

export const Container = styled.View`
flex: 1;
align-items: center;
`;

export const Titulo = styled.Text`
font-size: 50px;
font-weight: bold;
margin-top: 20%;
margin-right: 29%;
color: #000;
top: 10px;
`;

export const SubTitulo = styled.Text`
font-size: 15px;
margin-right: 32%;
margin-bottom: 30px;
`;

export const Logo = styled.Image`
margin: 50px;
`;

export const Icon = styled.Image`
position: absolute;
right: 50px;
top: 215px;
z-index: 1;
`;

export const AreaInput = styled.KeyboardAvoidingView`
flex-direction: row;
justify-content: center;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#ccc'
})`
background-color: #FFF;
width: 90%;
font-size: 13px;
margin-bottom: 30px;
padding: 15px;
border-radius: 12px;

`;

export const Link = styled.TouchableOpacity`
left: 110px;
margin-bottom: 5px;
`;

export const TextLink = styled.Text`
color: #bbb;
`;

export const  Button = styled.TouchableOpacity`
background-color: #001D48;
width: 90%;
height: 8%;
align-items: center;
justify-content: center;
border-radius: 16px;
margin: 20px;
`;

export const ButtonText = styled.Text`
color: #FFF;
font-weight: bold;
`;

export const ContainerCadastro = styled.View`
flex-direction: row;
margin: 5px;
`;

export const LinkCadastro = styled.TouchableOpacity`
left: 5px;
`;

export const CadastroText = styled.Text`
color: #565475;
font-weight: bold;
`;




export const Decoration = styled.Image`
position: absolute;
top: 64.5%;
width: 500px;
height: 300px;
z-index: -1;
`;