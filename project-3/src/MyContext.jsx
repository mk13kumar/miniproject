
import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState([]);

  // const addformData = (data) => {
  //   setSharedData((prev) => [...prev, data]); // <- also fixed this line
  // };

  return (
    <MyContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </MyContext.Provider>
  );
};

// import React from 'react'

// const MyContext = () => {
//   return (
//     <div>MyContext</div>
//   )
// }

// export default MyContext