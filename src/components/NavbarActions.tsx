"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { ShoppingBag } from "lucide-react";
import useCart from "../../hooks/use-cart";
import { useRouter } from "next/navigation";

export function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter()
  const cart = useCart()

  if (!isMounted) return null;

  return (
    <div className="ml-auto items-center gap-x-4 flex">
      <Button
        onClick={() => router.push('/cart')}
      className="flex items-center rounded-full px-4 py-2 bg-black">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-white font-medium text-sm">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}
