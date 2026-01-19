import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const API_KEY = "fca_live_r4vapHPTn1T8zbZkdQWtRPihkRj9lw6LFv50A50j";

  useEffect(() => {
    if (!currency) return;

    fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${currency.toUpperCase()}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res && res.data) {
          setData(res.data);
        } else {
          setData({});
          console.error("API format unexpected:", res);
        }
      })
      .catch((err) => console.error("API ERROR:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
