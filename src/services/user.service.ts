import {users} from '../data/users';

export const getUserByEmail = (email: string) => {
  return users.find(user => user.email === email);
}

export const getUserById = (id: number) => {
  return users.find(user => user.id === id);
}