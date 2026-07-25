import { useState, useEffect } from 'react';
import axios from 'axios';

const UseApi = (url) => {
    const [api, setApi] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchApi = async () => {
            const result = await axios.get(url)
            setApi(result.data)
            setLoading(false)
        }
        fetchApi();
    }, [url])

    return { api, loading }
}

export default UseApi;