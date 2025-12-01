export interface RaffleNumber {
  number: number;
  sold: boolean;
  buyer?: string;
  status?: "Pago ✅" | "Pendente";
}

/**
 * Lista dos números vendidos e suas informações
 * – Você só edita aqui
 */
const soldNumbers: Record<number, { buyer: string; status: "Pago ✅" }> = {
  1: { buyer: "Monique", status: "Pago ✅" },
  4: { buyer: "Bruno", status: "Pago ✅" },
  5: { buyer: "Carlos", status: "Pago ✅" },
  7: { buyer: "Aline", status: "Pago ✅" },
  8: { buyer: "Almir Evangelista", status: "Pago ✅" },
  10: { buyer: "Dona Rosa", status: "Pago ✅" },
  11: { buyer: "Luana escola", status: "Pago ✅" },
  13: { buyer: "Crisly", status: "Pago ✅" },
  14: { buyer: "Marcos Leite", status: "Pago ✅" },
  17: { buyer: "Dona Rosa", status: "Pago ✅" },
  19: { buyer: "Lizzie", status: "Pago ✅" },
  20: { buyer: "Lizzie", status: "Pago ✅" },
  21: { buyer: "Aline", status: "Pago ✅" },
  22: { buyer: "Dona Rosa", status: "Pago ✅" },
  24: { buyer: "Jaiany", status: "Pago ✅" },
  27: { buyer: "Amanda Carol", status: "Pago ✅" },
  28: { buyer: "Jaqueline Ayla", status: "Pago ✅" },
  29: { buyer: "Amanda Carol", status: "Pago ✅" },
  31: { buyer: "Jaqueline Ayla", status: "Pago ✅" },
  32: { buyer: "Dona Rosa", status: "Pago ✅" },
  37: { buyer: "Monique", status: "Pago ✅" },
  49: { buyer: "Dona Rosa", status: "Pago ✅" },
  50: { buyer: "Igor", status: "Pago ✅" },
  57: { buyer: "Dona Rosa", status: "Pago ✅" },
  64: { buyer: "Dona Rosa", status: "Pago ✅" },
  70: { buyer: "Dona Rosa", status: "Pago ✅" },
  87: { buyer: "Allyson", status: "Pago ✅" },
  88: { buyer: "Dona Rosa", status: "Pago ✅" },
  99: { buyer: "Bruno", status: "Pago ✅" },
  100: { buyer: "Dona Rosa", status: "Pago ✅" },
};

/**
 * Gera a lista de 1 a 100, na ordem correta
 * e aplica as informações dos que foram vendidos
 */
export const raffleNumbers: RaffleNumber[] = Array.from(
  { length: 100 },
  (_, i) => {
    const n = i + 1;

    if (soldNumbers[n]) {
      return {
        number: n,
        sold: true,
        buyer: soldNumbers[n].buyer,
        status: soldNumbers[n].status,
      };
    }

    return {
      number: n,
      sold: false,
    };
  }
);
