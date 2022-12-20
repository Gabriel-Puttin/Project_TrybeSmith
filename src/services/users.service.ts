import { Users, Objreturn } from '../interfaces/users.interface';
import { JWT } from '../interfaces/jwt.interface';
import UsersModel from '../models/users.model';
import connection from '../models/connection';
import validatedUser from './validations/usersValidation';
import { createToken } from '../auth/jwtFunctions';

// const HTTP_NOT_FOUND_STATUS = 404;

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public create = async (user: Users): Promise<Objreturn> => {
    if (!user.level && user.level !== 0) {
      return { type: 400, message: '"level" is required' };
    }
    const verifyUser = validatedUser(user);
    if (verifyUser) return verifyUser;
    const createUser = await this.model.create(user);
    const { password, ...payload } = createUser;
    const token = createToken(payload as JWT);
    return { type: null, message: token };
  };
}