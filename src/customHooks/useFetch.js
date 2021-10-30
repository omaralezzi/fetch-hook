import {useState, useEffect} from 'react'

const useFetch = (URL, initialState) => {
    const [results, setResults] = useState(initialState)

    useEffect(() => {
        fetch(URL)
        .then((response) => response.json())
        .then((data) => setResults(data))
        .catch((error) => console.error(error))
    }, [URL])

    return results
}

export default useFetch