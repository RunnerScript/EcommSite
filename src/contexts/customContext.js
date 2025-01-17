import { useEffect, useState } from "react";

/* Custom createContext  */
const customCreateContext = (defaultValue) => {
    const context = {
        value: defaultValue,
        subscribers: []
    }

    const Provider = ({ value, children }) => {
        context.value = value;
        for (let i = 0; i < subscribers.length; i++) {
            const callback = subscribers[i];
            callback(value);
        }
        return children;
    }

    const useCustomContext = () => {
        const [, setState] = useState(context.value);
        useEffect(() => {
            const callback = setState;
            context.subscribers.push(callback);
            return () => {
                context.subscribers = context.subscribers.filter((cb) => cb !== callback);
            }
        }, []);
        return context.value;
    }
}

export default customCreateContext;