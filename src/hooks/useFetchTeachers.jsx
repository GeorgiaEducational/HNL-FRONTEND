import { useState, useEffect } from 'react';

const url = "http://localhost:3001/teachers";

function useFetchTeachers() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Unexpected error, try again later!")
                }
                const result = await response.json();
                setData(result);
            }
            catch (err) {
                setErrors(err.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [])

    return {loading, data, errors};

}

export default useFetchTeachers;
