"use client";

import React, { useState } from "react";

interface BallProps {
  number: number;
  sold: boolean;
  buyer?: string;
  status?: "Pago ✅" | "Pendente 🙏";
}

export default function Ball({ number, sold, buyer, status }: BallProps) {
  // Detecta cliente sem usar efeito
  const [mounted] = useState(() => typeof window !== "undefined");

  const [showTooltip, setShowTooltip] = useState(false);

  if (!mounted) return null; // evita hydration mismatch

  const handleClick = () => {
    setShowTooltip(true);

    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={handleClick}
        className={`
          w-14 h-14 flex items-center justify-center rounded-full text-white 
          font-bold transition shadow-md active:scale-95
          ${sold 
            ? "bg-linear-to-br from-pink-500 to-red-500 shadow-[0_0_10px_rgba(255,80,120,0.6)]" 
            : "bg-linear-to-br from-yellow-300 to-yellow-500 shadow-[0_0_12px_rgba(255,215,0,0.7)]"
          }
        `}
      >
        {number}
      </button>

      {showTooltip && (
        <div
          className="
            absolute -top-20 left-1/2 -translate-x-1/2
            bg-white text-black text-sm font-medium
            p-3 rounded-xl shadow-2xl border border-pink-200
            z-50 w-max whitespace-nowrap
            animate-fade
          "
        >
          {sold ? (
            <>
              <p><strong>Comprador:</strong> {buyer}</p>
              <p><strong>Status:</strong> {status}</p>
            </>
          ) : (
            <>
              <p className="font-semibold text-green-700">Número disponível 💛</p>
              <p className="text-gray-700">Faça o PIX e avise ao casal 💝</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
