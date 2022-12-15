import { Request, Response } from 'express';
import UsersService from '../services/users.service';

export default class UsersController {
  constructor(private usersService = new UsersService()) {}

  public create = async (req: Request, res: Response) => {
    const { type, message } = await this.usersService.create(req.body);
    if (type) return res.status(type).send({ message });
    res.status(201).json({ token: message });
  };
}