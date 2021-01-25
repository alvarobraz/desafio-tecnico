import React, { useRef, useState, useEffect } from 'react';
// import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Icon from 'react-native-vector-icons/MaterialIcons';
// import logo from '../../assets/logo.png';
import Background from '../../components/Background';
import { signUpCustomerRequest } from '~/store/modules/customer/actions';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function Register({ navigation }) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const telefoneRef = useRef();
  const cepRef = useRef();
  const logradouroRef = useRef();
  const bairroRef = useRef();
  const localidadeRef = useRef();
  const ufRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');

  useEffect(() => {
    if (cep.length < 8) {
      return;
    }

    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
      setLogradouro(response.data.logradouro);
      setBairro(response.data.bairro);
      setLocalidade(response.data.localidade);
      setUf(response.data.uf);
    });
  }, [cep]);

  const loading = useSelector((state) => state.customer.loading);

  function handleSubmit() {
    dispatch(
      signUpCustomerRequest(
        name,
        email,
        telefone,
        cep,
        logradouro,
        bairro,
        localidade,
        uf
      )
    );
  }

  return (
    <Background>
      <Container>
        <Title>Cadastrar</Title>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => telefoneRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="phone-iphone"
            keyboardType="phone-pad"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Telefone"
            ref={telefoneRef}
            returnKeyType="send"
            onSubmitEditing={() => cepRef.current.focus()}
            value={telefone}
            onChangeText={setTelefone}
          />

          <FormInput
            icon="room"
            keyboardType="phone-pad"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Cep"
            ref={cepRef}
            returnKeyType="send"
            onSubmitEditing={() => logradouroRef.current.focus()}
            value={cep}
            onChangeText={setCep}
          />

          <FormInput
            icon="room"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Logradouro"
            ref={logradouroRef}
            returnKeyType="send"
            onSubmitEditing={() => bairroRef.current.focus()}
            value={logradouro}
            onChangeText={setLogradouro}
          />
          <FormInput
            icon="room"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Bairro"
            ref={bairroRef}
            returnKeyType="send"
            onSubmitEditing={() => localidadeRef.current.focus()}
            value={bairro}
            onChangeText={setBairro}
          />
          <FormInput
            icon="room"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Localidade"
            ref={localidadeRef}
            returnKeyType="send"
            onSubmitEditing={() => ufRef.current.focus()}
            value={localidade}
            onChangeText={setLocalidade}
          />
          <FormInput
            icon="room"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="UF"
            ref={ufRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={uf}
            onChangeText={setUf}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Criar cadastro
          </SubmitButton>
          <SignLink
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          >
            <SignLinkText>Voltar</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
Register.navigationOptions = {
  tabBarLabel: 'Cadastrar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="add-circle-outline" size={20} color={tintColor} />
  ),
};
