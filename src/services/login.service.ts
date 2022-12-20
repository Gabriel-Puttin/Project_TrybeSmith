import LoginModel from '../models/login.model';
import User from '../interfaces/login.interface';
import validateLogin from './validations/loginValidation';
import connection from '../models/connection';
import { Objreturn } from '../interfaces/users.interface';
import { createToken } from '../auth/jwtFunctions';
import { JWT } from '../interfaces/jwt.interface';

const HTTP_UNAUTHORIZED_STATUS = 401;

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public login = async (userInfo: User): Promise<Objreturn> => {
    const verifyLogin = validateLogin(userInfo);
    if (verifyLogin) return verifyLogin;
    const user = await this.model.getByUserName(userInfo);
    if (!user || (user.password !== userInfo.password)) {
      return { type: HTTP_UNAUTHORIZED_STATUS, message: 'Username or password invalid' };
    }
    const { id, password, vocation, level, ...payload } = user;
    const token = createToken(payload as JWT);
    return { type: null, message: token };
  };
}