import { useState, useEffect } from 'react';

import { API_MODE } from '../API';

export const useFetchData = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const changeDataFormat = (data) => {
    return(
      Object.keys(data).map(key => ({
        label: key,
        value: data[key].field
      }))
    )
  }

  useEffect(() => {
    setLoading(true);
    fetch(API_MODE)
      .then((responce) => responce.json())
      .then((result) => setData(changeDataFormat(result)))
      .catch(() => setError('Something went wrong!'))
      .finally(() => setLoading(false))
  }, []);

  return { data, loading, error }
}