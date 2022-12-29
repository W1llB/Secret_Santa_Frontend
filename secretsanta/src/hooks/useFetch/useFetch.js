import { useState, useEffect } from "react";

function useFetch(url, inputData, method) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: method,
      headers: { Accept: "application/json" },
      body: { payload: inputData },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setData(null);
        setError(err);
      });
  }, [inputData]);
  return { data, error };
}

export default useFetch;
