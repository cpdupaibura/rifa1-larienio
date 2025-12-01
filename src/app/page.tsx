import BallGrid from "@/components/BallGrid";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start p-10 bg-[#fdf7f2]">
      <h1 className="text-3xl font-bold mb-8 text-pink-700 drop-shadow-sm">
        Rifa de Casamento – Larissa & Enio 💍
      </h1>

      <div
        className="
          w-full max-w-4xl 
          bg-white/80
          backdrop-blur-sm
          rounded-2xl 
          shadow-[0_4px_20px_rgba(0,0,0,0.08)]
          border border-pink-100
          p-8
        "
      >
        <BallGrid />
      </div>
    </main>
  );
}
