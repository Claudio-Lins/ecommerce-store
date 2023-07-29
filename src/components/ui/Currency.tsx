"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
});

interface CurrencyProps {
  value?: string | number;
}

export function Currency({ value }: CurrencyProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
}
