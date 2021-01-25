import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { Container, Title, PageContent } from './styles';

import { updateCustomerRequest } from '~/store/modules/customer/actions';
import history from '~/services/history';

export default function SignUp() {
  const profile = useSelector(state => state.customer.profile);

  const dispatch = useDispatch();

  // const [setFieldValue] = useState('');

  function handleSubmit({
    name,
    email,
    telefone,
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
    password,
  }) {
    const data = {
      id: profile.id,
      name,
      email,
      telefone,
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
      password,
    };

    dispatch(updateCustomerRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Title>
          <strong>Edição de clientes</strong>

          <aside>
            <button type="button" onClick={() => history.push('/dashboard')}>
              <div>
                <MdKeyboardArrowLeft size={20} color="#fff" />
                VOLTAR
              </div>
            </button>
            <button type="submit">
              <div>
                <MdCheck size={18} color="#fff" />
                SALVAR
              </div>
            </button>
          </aside>
        </Title>

        <PageContent>
          <div className="top">
            <p>Nome</p>
            <Input name="name" />
          </div>
          <div className="bottom">
            <p>E-mail</p>
            <Input name="email" />
          </div>
          <div className="bottom">
            <p>Telefone</p>
            <Input name="telefone" />
          </div>
          <div className="bottom">
            <p>cep</p>
            <Input name="cep" />
          </div>
          <div className="bottom">
            <p>logradouro</p>
            <Input name="logradouro" />
          </div>
          <div className="bottom">
            <p>bairro</p>
            <Input name="bairro" />
          </div>
          <div className="bottom">
            <p>cidade</p>
            <Input name="localidade" />
          </div>
          <div className="bottom">
            <p>Estado</p>
            <Input name="uf" />
          </div>
        </PageContent>
      </Form>
    </Container>
  );
}
