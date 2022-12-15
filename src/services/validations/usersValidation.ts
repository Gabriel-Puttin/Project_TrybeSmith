import { Users } from '../../interfaces/users.interface';
import { usersSchema } from './schemas';

const HTTP_BAD_REQUEST_STATUS = 400;

const validatedUser = (user: Users) => {
  if (!user) return { type: HTTP_BAD_REQUEST_STATUS, message: 'Invalid Entries' };
  const { error } = usersSchema.validate(user);
  if (error) return { type: HTTP_BAD_REQUEST_STATUS, message: error.message };
};

export default validatedUser;