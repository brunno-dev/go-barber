import User from '../models/User';

class UserController {
  async store(req, res) {
    // verifica se já existe o e-mail na base
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }
    // retorna so id, name, email e provider para o front
    const {
      id, name, email, provider,
    } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
