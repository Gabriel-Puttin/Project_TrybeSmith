import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const { type, message } = await this.loginService.login(req.body);
    if (type) return res.status(type).send({ message });
    res.status(200).json({ token: message });
  };
}