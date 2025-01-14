import Axios from 'axios';
import { useState, useEffect } from 'react';
export const useFetchData = (url, intialData) => {
    const [data, setData] = useState(intialData);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (url) => {
        setIsLoading(true);

        try {
            const response = await Axios.get(url);
            setData(response.data);
            setError(null);
        } catch (error) {
            setError(error);
            setData([]);
        }
        finally {
            setIsLoading(false);
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