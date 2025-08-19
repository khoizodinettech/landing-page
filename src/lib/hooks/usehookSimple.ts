import { useState } from "react";
import { Simple } from "../interfaces/simple";

const useFetchSimple = () => {
  const [simple, setSimple] = useState<Simple[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const fetchSimple = async () => {
    setLoading(true);
    try {
      const response = await fetch("api/simple");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Simple[] = await response.json();
      setSimple(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { simple, loading, error, fetchSimple };
};

export default useFetchSimple;
