import React from 'react';

export const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const request = React.useCallback(async (url, options) => {
    let resp;
    let json;

    try {
      setError(null);
      setLoading(true);
      resp = await fetch(url, options);
      json = await resp.json();
      if (!resp.ok) throw new Error(`O seu reques foi negado`);
    } catch (error) {
      json = null;
      setError(error.message);
    } finally {
      setLoading(false);
      setData(data);
      return { resp, json };
    }
  }, []);
  return {
    data,
    error,
    loading,
    request
  };
};
