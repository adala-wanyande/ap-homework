import { createContext, useState, useContext } from "react";

export const AgeContext = createContext<ContextType>({
  age: 0,
});
