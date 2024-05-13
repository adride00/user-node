type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};


export const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@outlook.com',
    password: '123456',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@gmail.com',
    password: 'abcdef',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@yahoo.com',
    password: 'qwerty',
  }
];