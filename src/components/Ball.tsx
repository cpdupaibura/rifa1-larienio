"use client";

import React from "react";

interface BallProps {
  number: number;
  sold: boolean;
  buyer?: string;
  status?: "pago" | "pendente";
}

export default function Ball({ number, sold, buyer, status }: BallProps) {
  return (
    <div className="relative group flex items-center justify-center">
      <div
        className={`
          w-14 h-14 flex items-center justify-center rounded-full font-bold transition-all
          border-2 shadow-md
          ${sold 
            ? "bg-gradient-to-br from-rose-400 to-pink-500 text-white border-pink-700"
            : "bg-gradient-to-br from-emerald-300 to-green-500 text-white border-green-700"
          }
          group-hover:scale-110
        `}
      >
        {number}
      </div>

      {/* Tooltip */}
      {sold && (
        <div
          className="
            absolute -top-24 left-1/2 -translate-x-1/2
            bg-white text-gray-900 text-sm font-medium
            px-4 py-3 rounded-xl shadow-2xl border border-pink-200
            opacity-0 group-hover:opacity-100 z-50
            w-max whitespace-nowrap
            transition
          "
        >
          <p><strong className="text-pink-600">Comprador:</strong> {buyer}</p>
          <p><strong className="text-pink-600">Status:</strong> {status}</p>
        </div>
      )}
    </div>
  );
}
