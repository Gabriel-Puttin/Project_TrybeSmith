import { Users } from '../../interfaces/users.interface';
import { usersSchema } from './schemas';

const HTTP_BAD_REQUEST_STATUS = 400;
const HTTP_UNPROCESSABLE_STATUS = 422;

const validatedUser = (user: Users) => {
  const { username, vocation, password } = user;
  if (!username) return { type: HTTP_BAD_REQUEST_STATUS, message: '"username" is required' };
  if (!vocation) return { type: HTTP_BAD_REQUEST_STATUS, message: '"vocation" is required' };
  if (!password) return { type: HTTP_BAD_REQUEST_STATUS, message: '"password" is required' };
  const { error } = usersSchema.validate(user);
  if (error) return { type: HTTP_UNPROCESSABLE_STATUS, message: error.message };
};

export default validatedUser;