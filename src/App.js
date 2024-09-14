import React, { createContext, useState } from "react";
import Home from "./component/Home";
// import LoginForm from "./component/Captcha";
// import MemoHook from "./usememo/MemoHook";
// import MemoHookOne from "./usememo/MemoHookOne";
// import CallBackHook from "./useCallBack/CallBackHook";
// import FindSum from "./useCallBack/FindSum";
// import RefHook from "./UseRef/RefHook";
// import RefHookTask from "./UseRef/RefHookTask";
// import TaskTextArea from "./UseRef/TaskTextArea";
// import LoginTask from "./LoginTask/LoginTask";
// import Example from "./LoginTask/Example";
import PracticeUseRef from "./UseRef/PracticeUseRef";

export const UserContext = createContext();

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "mithila", email: "mithila@xyz.com" },
    { id: 2, name: "Tanima", email: "tanima@xyz.com" },
    { id: 3, name: "Karthik", email: "karthik@xyz.com" },
    { id: 4, name: "Abishek", email: "abishkek@abc.com" },
  ]);

  return (
    <div>
      <UserContext.Provider value={{ users, setUsers }}>
        <Home />
        {/* <PracticeUseRef /> */}
        {/* <Example /> */}
{/* <LoginTask /> */}
      {/* <LoginForm /> */}
         {/* <Home />
       
        <MemoHook />
        <MemoHookOne/>
        <CallBackHook />
        <FindSum />
        <RefHook />
        <RefHookTask /> 
        <TaskTextArea /> */}
      </UserContext.Provider>
    </div>
  );
}

export default App;
