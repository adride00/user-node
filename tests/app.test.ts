import { getUserById } from '../src/services/user.service';

describe('App', () => {
  test('should return a user', () => {
    const user = getUserById(1);

    expect(user).toEqual({
    id: 2,
    name: 'John Doe',
    email: 'john@outlook.com',
    password: '123456',
    });
  }
  );
})