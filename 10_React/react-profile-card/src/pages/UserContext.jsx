import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: '최지원', age: 28, status: '온라인' },
    { id: 2, name: '김민수', age: 32, status: '오프라인' },
  ]);

  const addUser = (user) => {
    setUsers(prev => [...prev, { ...user, id: Date.now() }]);
  };

  const deleteUser = (id) => {
    setUsers(prev => prev.filter(user => user.id !== parseInt(id)));
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
