import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MdEdit, MdDelete, MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Title, List } from './styles';

import MoreBtn from '../../components/MoreBtn';

import { editCustomerRequest } from '~/store/modules/customer/actions';

export default function Dashboard() {
  const [customer, setCustomer] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadcustomer() {
      const response = await api.get('/customers', {});

      setCustomer(response.data);
    }

    loadcustomer();
  }, []);

  async function handleDelete(id) {
    try {
      await api.delete(`/customers/${id}`);
      toast.success('Cliente deletado!', 1000);
    } catch (error) {
      toast.error('Erro ao deletar o cliente!');
      console.tron.log(error);
    } finally {
      setTimeout(function() {
        history.go(0);
      }, 3500);
    }
  }

  return (
    <Container>
      <Title>
        <strong>Clientes</strong>
        <aside>
          <button type="button" onClick={() => history.push('/register')}>
            <div>
              <MdAdd color="#fff" size={20} />
              Cadastrar
            </div>
          </button>
        </aside>
      </Title>
      <List>
        {customer.map(c => (
          <li key={c.id}>
            <strong>{c.name}</strong>
            <MoreBtn className="menu">
              <button
                type="button"
                onClick={() => dispatch(editCustomerRequest(c.id))}
              >
                <MdEdit color="#4D85EE" size={12} />
                Editar
              </button>
              <button type="button" onClick={() => handleDelete(c.id)}>
                <MdDelete color="#DE3B3B" size={12} />
                Excluir
              </button>
            </MoreBtn>
          </li>
        ))}
      </List>
    </Container>
  );
}
