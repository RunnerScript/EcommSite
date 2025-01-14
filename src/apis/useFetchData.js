import Axios from 'axios';
import { useState, useEffect } from 'react';
export const useFetchData = (url, intialData) => {
    const [data, setData] = useState(0);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const fetchData = async (url) => {

        setIsLoading(true);
        try {
            const response = await Axios.get(url);
            console.log(response);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);


    return {
        data,
        error,
        isLoading,
    }
}