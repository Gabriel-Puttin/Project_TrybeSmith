import User from '../../interfaces/login.interface';

const HTTP_BAD_REQUEST_STATUS = 400;

const validateLogin = (user: User) => {
  const { username, password } = user;

  if (!username) return { type: HTTP_BAD_REQUEST_STATUS, message: '"username" is required' };
  if (!password) return { type: HTTP_BAD_REQUEST_STATUS, message: '"password" is required' };
};

export default validateLogin;