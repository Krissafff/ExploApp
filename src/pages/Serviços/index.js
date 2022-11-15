import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Container, AreaInput, Input, Descrição, BotaoConfirmar, TextoButao, ContainerBtn } from './styles';
import firebase from '../../services/firebaseConnection';
import {format} from 'date-fns'

export default function Serviços() {
 const [maquina, setMaquina] = useState('');
 const [horimetro, setHorimetro] = useState('');
 const [localidade, setLocalidade] = useState('');
 const [encarregado, setEncarregado] = useState('');
 const [defeito, setDefeito] = useState('');
 const [servico, setServico] = useState('');
 const [pecas, setPecas] = useState('');
 const [servicoFuturos, setServicoFuturos] = useState('');
 
 async function handleAdd(){
   let servicos = await firebase.database().ref('Serviços');
   let chave = servicos.push().key;
   servicos.child(chave).set({
    Maquina: maquina,
    Horimetro: horimetro,
    Localidade: localidade,
    Encarregado: encarregado,
    Defeito: defeito,
    Serviços: servico,
    Peças_Utilizadas: pecas,
    Serviços_Futuros: servicoFuturos,
    date: format(new Date(), 'dd/MM/yyyy'), 
   }) 
 } 
 
 return (
   <Container>
    <ScrollView>
    <Descrição>Máquina</Descrição>
      <AreaInput>
        <Input 
          placeholder="Máquina"
          autoCorrect={false}
          autoCapitalize="none"
          value={maquina}
          onChangeText={(text) => setMaquina(text)}
        />
      </AreaInput>

    <Descrição>Horímetro</Descrição>
      <AreaInput>
        <Input 
          placeholder="Horímetro"
          autoCorrect={false}
          autoCapitalize="none"
          value={horimetro}
          onChangeText={(text) => setHorimetro(text)}
        />
      </AreaInput>

    <Descrição>Localidade</Descrição>
      <AreaInput>
        <Input 
          placeholder="Localidade"
          autoCorrect={false}
          autoCapitalize="none"
          value={localidade}
          onChangeText={(text) => setLocalidade(text)}
        />
      </AreaInput>
    <Descrição>Encarregado</Descrição>
      <AreaInput>
        <Input 
          placeholder="Encarregado e operador"
          autoCorrect={false}
          autoCapitalize="none"
          value={encarregado}
          onChangeText={(text) => setEncarregado(text)}
        />
      </AreaInput>

    <Descrição>Defeitos</Descrição>
      <AreaInput>
        <Input 
          placeholder="Defeitos"
          autoCorrect={false}
          autoCapitalize="none"
          value={defeito}
          onChangeText={(text) => setDefeito(text)}
        />
      </AreaInput>

      

      <Descrição>Serviços executados</Descrição>
      <AreaInput>
        <Input 
          placeholder="Serviços executados"
          autoCorrect={false}
          autoCapitalize="none"
          value={servico}
          onChangeText={(text) => setServico(text)}
        />
      </AreaInput>

      <Descrição>Serviços futuros</Descrição>
      <AreaInput>
        <Input 
          placeholder="Serviços futuros"
          autoCorrect={false}
          autoCapitalize="none"
          value={servicoFuturos}
          onChangeText={(text) => setServicoFuturos(text)}
        />
      </AreaInput>

      <Descrição>Peças utilizadas</Descrição>
      <AreaInput>
        <Input 
          placeholder="Peças utilizadas"
          autoCorrect={false}
          autoCapitalize="none"
          value={pecas}
          onChangeText={(text) => setPecas(text)}
        />
      </AreaInput>

      <ContainerBtn>
        <BotaoConfirmar onPress={() => {
            handleAdd()
            alert('Serviço Cadastrado')
        }}>
            <TextoButao>Confirmar</TextoButao>
        </BotaoConfirmar>
      </ContainerBtn>
      </ScrollView>
    </Container>
  );
}