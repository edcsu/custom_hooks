import { useEffect, useState} from 'react'

export function useFetch(fetchFx, initialValue) {
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()
    const [fetchedData, setFetchedData] = useState(initialValue)

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
            const data = await fetchFx();
            setFetchedData(data);
            } catch (error) {
            setError({ message: error.message || 'Failed to fetch data' });
            }

            setIsFetching(false);
        }

        fetchData();
    }, [fetchFx]);

    return {
        isFetching,
        fetchedData,
        error
    }
}