import { useState, useEffect, useCallback } from "react";
import type { PortfolioData } from "../data";

export type { PortfolioData };

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/data.json");
      if (!response.ok) throw new Error("Failed to fetch data");
      const json = await response.json();
      setData(json as PortfolioData);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
