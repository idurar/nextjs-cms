import { useEffect, useState } from 'react';

function useFetchData(fetchFunction: any) {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchFunction();
        setData(data.result);
        setSuccess(true);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [isLoading]);

  return { data, isLoading, isSuccess, error };
}

export default function useFetch(fetchFunction: any) {
  const {
    data,
    isLoading,
    isSuccess,
    error,
  }: { data: any; isLoading: Boolean; isSuccess: Boolean; error: any } =
    useFetchData(fetchFunction);

  return { result: data, isLoading, isSuccess, error };
}
