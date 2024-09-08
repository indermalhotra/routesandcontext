import { createContext, useState } from "react";

export const DataContext = createContext({
    user:"",
    setUser:()=>{}
})

const UserDataProvider = ({children}) => {
    const [userData, setUserData] = useState("Hello");
    const value = {userData,setUserData}
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export default UserDataProvider;