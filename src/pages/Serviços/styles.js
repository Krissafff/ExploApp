import styled from 'styled-components';

export const Container = styled.View`
flex: 1;
background-color: #FFF;
`;

export const Descrição = styled.Text`
font-size: 20px;
margin-left: 10px;
color: #000;
margin-bottom: 5px;
`;

export const AreaInput = styled.KeyboardAvoidingView`
flex-direction: row;
justify-content: center;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#ccc'
})`
background-color: #ffffff;
width: 95%;
font-size: 13px;
margin-bottom: 30px;
padding: 15px;
border-radius: 7px;
border: 1px #ddd
`;

export const BotaoConfirmar = styled.TouchableOpacity`
width: 95%;
height: 50px;
margin-left: auto;
margin-right: auto;
background-color: rgb(2,0,70);
border-radius:7px;
align-items: center;
`;

export const TextoButao = styled.Text`
font-size: 18px;
color: white;
top: 10px;
`;

export const ContainerBtn = styled.View`
margin-bottom: 30px;
`;