import * as Yup from 'yup';
import Customer from '../models/Customer';
import File from '../models/File';

class CustomerController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await Customer.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'E-mail already exists.' });
    }

    const {
      id,
      name,
      email,
      telefone,
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
      avatar_id,
    } = await Customer.create(req.body);

    return res.json({
      id,
      name,
      email,
      telefone,
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
      avatar_id,
    });
  }

  async update(req, res) {
    const { id } = req.params;
    const { email } = req.body;

    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const customer = await Customer.findByPk(id);

    if (!customer) {
      return res.status(400).json({ error: 'Customer not found' });
    }

    if (email && email !== customer.email) {
      const customerExists = await Customer.findOne({
        where: { email: req.body.email },
      });
      if (customerExists) {
        return res.status(400).json({ error: 'Customer already exists.' });
      }
    }

    const {
      name,
      telefone,
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
    } = await customer.update(req.body);

    return res.json({
      id,
      name,
      email,
      telefone,
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
    });
  }

  async index(req, res) {
    const customers = await Customer.findAll({
      attributes: [
        'id',
        'name',
        'email',
        'telefone',
        'cep',
        'logradouro',
        'bairro',
        'localidade',
        'uf',
        'avatar_id',
      ],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(customers);
  }

  async show(req, res) {
    const { id } = req.params;

    const customer = await Customer.findOne({
      where: { id },
      attributes: [
        'id',
        'name',
        'email',
        'telefone',
        'cep',
        'logradouro',
        'bairro',
        'localidade',
        'uf',
        'avatar_id',
        'created_at',
      ],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'url', 'path'],
        },
      ],
    });

    if (!customer) {
      return res.status(400).json({ error: 'customer not found' });
    }

    return res.json(customer);
  }

  async delete(req, res) {
    const { id } = req.params;

    const customer = await Customer.findByPk(id);

    if (!customer) {
      return res.status(400).json({ error: 'Customer not found' });
    }

    await customer.destroy();

    return res.json();
  }
}

export default new CustomerController();
