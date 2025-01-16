import { createContext, useState } from "react";

const ProductContext = createContext();
export const ProductProvider = () => {
    const [count, setCount] = useState(0);
    return <ProductContext.Provider value={count}></ProductContext.Provider>
}