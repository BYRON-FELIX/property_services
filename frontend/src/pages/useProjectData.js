import { useEffect, useState } from "react";

export default function useProjectData(url) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          setResult({ url, error: response.status });
          return;
        }
        const data = await response.json();
        if (!controller.signal.aborted) {
          setResult({ url, data });
        }
      } catch {
        if (!controller.signal.aborted) {
          setResult({ url, error: true });
        }
      }
    }

    load();
    return () => controller.abort();
  }, [url]);

  return result?.url === url ? result : {};
}
