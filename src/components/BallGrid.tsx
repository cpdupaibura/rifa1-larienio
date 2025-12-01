"use client";

import Ball from "./Ball";
import { raffleNumbers } from "@/data/raffle";

export default function BallGrid() {
  return (
    <div className="grid grid-cols-5 sm:grid-cols-10 gap-5">
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
