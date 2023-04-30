import { createContext,useState } from "react";

export const UserContext=createContext({
    setEmp:()=>null,
    emp:null,
});

export const UserProvider=({children})=>{
    const [emp,setEmp]=useState(null);
    const value={emp,setEmp};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};