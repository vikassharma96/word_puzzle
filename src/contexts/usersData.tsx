import React, {createContext, useState, useMemo, ReactNode} from 'react';

type User = {
  name: string;
  totalScore: number;
};

type UsersContextType = {
  users: Array<User>;
  setUsers: (user: Array<User>) => void;
};

const UsersContext = createContext<UsersContextType>({
  users: [],
  setUsers: () => {},
});

type Props = {
  children?: ReactNode;
};

const UsersProvider = ({children}: Props) => {
  const [users, setUsers] = useState<Array<User>>([]);

  const value = useMemo(
    () => ({
      users,
      setUsers,
    }),
    [users],
  );

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export {UsersContext, UsersProvider};
