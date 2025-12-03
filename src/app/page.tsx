import Image from "next/image";
import BallGrid from "@/components/BallGrid";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start p-10 bg-[#fdf7f2]">
      <h1 className="text-3xl font-bold mb-1 text-neutral-900 drop-shadow-sm">
        Rifa de Casamento – Larissa & Enio 💍
      </h1>
      <h1 className="text-xl font-bold mb-1 text-pink-700 drop-shadow-sm">
        Rosa = Usado
      </h1>
      <h1 className="text-xl font-bold mb-1 text-yellow-500 drop-shadow-sm">
        Amarelo = Disponível
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

      {/* QR CODE */}
      <div className="mt-10 flex flex-col items-center">
        <Image
          src="/qrcode.jpg"
          width={240}
          height={240}
          alt="QR Code para pagamento via PIX"
          className="rounded-xl shadow-md"
        />
        <p className="mt-4 text-pink-700 font-semibold text-lg text-center">
          Escaneie o QR Code para realizar o PIX 💗
        </p>
      </div>
    </main>
  );
}
