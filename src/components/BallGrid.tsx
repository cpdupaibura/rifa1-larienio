"use client";

import dynamic from "next/dynamic";
import { raffleNumbers } from "@/data/raffle";

const Ball = dynamic(() => import("./Ball"), {
  ssr: false,
});

export default function BallGrid() {
  return (
    <div className="grid grid-cols-5 sm:grid-cols-10 gap-4 p-6">
      {raffleNumbers.map((item) => (
        <Ball
          key={item.number}
          number={item.number}
          sold={item.sold}
          buyer={item.buyer}
          status={item.status}
        />
      ))}
    </div>
  );
}
