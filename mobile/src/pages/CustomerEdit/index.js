import React, { useRef, useState, useEffect } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';

import Icon from 'react-native-vector-icons/MaterialIcons';
// import logo from '../../assets/logo.png';
import Background from '../../components/Background';
// import { updateCustomerRequest } from '~/store/modules/customer/actions';
import api from '~/services/api';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function Register({ navigation }) {
  // const dispatch = useDispatch();
  // const profile = useSelector((state) => state.customer.profile);

  const profile = navigation.getParam('customer');

  const emailRef = useRef();
  const telefoneRef = useRef();
  const cepRef = useRef();
  const logradouroRef = useRef();
  const bairroRef = useRef();
  const localidadeRef = useRef();
  const ufRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [telefone, setTelefone] = useState(profile.telefone);
  const [cep, setCep] = useState(profile.cep);
  const [logradouro, setLogradouro] = useState(profile.logradouro);
  const [bairro, setBairro] = useState(profile.bairro);
  const [localidade, setLocalidade] = useState(profile.localidade);
  const [uf, setUf] = useState(profile.uf);

  async function handleSubmit() {
    /*
      api.put, `/deliveryman/${id}`, {
      name,
      email,
      avatar_id,
    }
    */

    await api.put(`/customers/${profile.id}`, {
      name,
      email,
      telefone,
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
    });
    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
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

          <SubmitButton onPress={handleSubmit}>Atualizar cliente</SubmitButton>
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
  tabBarLabel: 'Editar Cliente',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="add-circle-outline" size={20} color={tintColor} />
  ),
};
