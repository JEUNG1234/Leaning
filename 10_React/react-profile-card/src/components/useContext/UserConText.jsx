import React, { createContext, useContext } from 'react'

const UserConText = createContext();

export function UserProvider({children}) {
    const user = {
        name : "최지원",
        age: 45,
        role : "관리자",
    }

    return(
        <UserConText.Provider value={user}>
            {children}
        </UserConText.Provider>
    )
}

export function useUser(){
    return useContext(UserConText);
}

