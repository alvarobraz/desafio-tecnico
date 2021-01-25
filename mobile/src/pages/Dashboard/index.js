import React, { Alert, useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import api from '~/services/api';

import Background from '~/components/Background';
// import Appointment from '~/components/Appointment';

import { Container, Title, List, Provider, Name } from './styles';

function Dashboard({ isFocused, navigation }) {
  // const { data } = route.params;
  const [customers, setCustomers] = useState([]);

  async function loadCustomers() {
    const response = await api.get('customers');
    setCustomers(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadCustomers();
    }
  }, [isFocused]);

  function handleEditCustomer(customer) {
    navigation.navigate('CustomerEdit', { customer });
  }

  async function handleDelete(id) {
    await api.delete(`customers/${id}`);
    Alert.alert('Sucesso!', 'Cliente deletado!');
    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Title>Clientes</Title>
        <List
          data={customers}
          keyExtractor={(customer) => String(customer.id)}
          renderItem={({ item: customer }) => (
            <Provider
            /* onPress={() => navigation.navigate('CustomerEdit', { customer })} */
            >
              <Name>{customer.name}</Name>
              <Icon
                name="edit"
                size={18}
                color="#3973ac"
                onPress={() => handleEditCustomer(customer)}
              />
              <Icon
                name="delete"
                size={18}
                color="#993333"
                onPress={() => handleDelete(customer.id)}
              />
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Clientes',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
