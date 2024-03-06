import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    const controller = new AbortController();
    fetch(url, {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((e) => {
        if (e?.name === "AbortError") return;
        console.log(e);
        setIsError(true);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { data, isLoading, isError };
};
