import React,{createContext} from "react";

const UserContext=React.createContext({id:1,user:"Ram"})

const UserConsumer=UserContext.Consumer
const UserProvider=UserContext.Provider

export {UserConsumer,UserProvider}
