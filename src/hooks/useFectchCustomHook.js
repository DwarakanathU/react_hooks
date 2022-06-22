import axios from "axios";
import { useState, useEffect } from "react";

export const useFectchCustomHook = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => {
        return err;
      });
  }, [url]);

  return data;
};
