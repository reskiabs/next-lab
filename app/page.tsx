"use client";

import { useEffect, useState } from "react";

type ApiResponseType = {
  id: number;
  title: string;
};

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      {data.map((item: ApiResponseType) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
