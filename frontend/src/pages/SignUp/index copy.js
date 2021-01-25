import React from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { Form, Input } from '@rocketseat/unform';
// import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { App, PageContent } from './styles';

// import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
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
  }) {
    dispatch(
      signUpRequest(
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

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value.replace(/[^0-9]/g, '');

    if (cep.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('localidade', data.localidade);
        setFieldValue('uf', data.uf);
      });
  }

  return (
    <App>
      <Formik
        onSubmit={handleSubmit}
        validateOnMount
        initialValues={{
          cep: '',
          logradouro: '',
          numero: '',
          complemento: '',
          bairro: '',
          cidade: '',
          uf: '',
        }}
        render={({ isValid, setFieldValue }) => (
          <Form>
            <PageContent>
              <div className="form-control-group">
                <p>Nome</p>
                <Field name="name" type="text" />
              </div>
              <div className="form-control-group">
                <p>e-mail</p>
                <Field name="email" type="text" />
              </div>
              <div className="form-control-group">
                <p>Telefone</p>
                <Field name="telefone" type="text" />
              </div>
              <div className="form-control-group">
                <p>Cep</p>
                <Field
                  name="cep"
                  type="text"
                  onBlur={ev => onBlurCep(ev, setFieldValue)}
                />
              </div>
              <div className="form-control-group">
                <p>Logradouro</p>
                <Field name="logradouro" type="text" />
              </div>
              <div className="form-control-group">
                <p>bairro</p>
                <Field name="bairro" type="text" />
              </div>
              <div className="form-control-group">
                <p>Cidade</p>
                <Field name="localidade" type="text" />
              </div>
              <div className="form-control-group">
                <p>Estado</p>
                <Field name="uf" type="text" />
              </div>
            </PageContent>

            <button type="submit" disabled={!isValid}>
              Enviar
            </button>
          </Form>
        )}
      />
    </App>
  );
}
