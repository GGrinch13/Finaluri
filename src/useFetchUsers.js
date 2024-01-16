import { useState, useEffect } from "react";
import { fetchUsers } from "./api";

const useFetchUsers = (page) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchUsers(page);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return { data, loading, error };
};

export default useFetchUsers;
