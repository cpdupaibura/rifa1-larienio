export interface RaffleNumber {
  number: number;
  sold: boolean;
  buyer?: string;
  status?: "pago" | "pendente";
}

/**
 * Lista dos números vendidos e suas informações
 * – Você só edita aqui
 */
const soldNumbers: Record<number, { buyer: string; status: "pago" }> = {
  1: { buyer: "Monique", status: "pago" },
  5: { buyer: "Carlos", status: "pago" },
  7: { buyer: "Aline", status: "pago" },
  10: { buyer: "Dona Rosa", status: "pago" },
  11: { buyer: "Luana escola", status: "pago" },
  13: { buyer: "Crisly", status: "pago" },
  17: { buyer: "Dona Rosa", status: "pago" },
  19: { buyer: "Lizzie", status: "pago" },
  20: { buyer: "Lizzie", status: "pago" },
  22: { buyer: "Dona Rosa", status: "pago" },
  24: { buyer: "Jaiany", status: "pago" },
  28: { buyer: "Jaqueline Ayla", status: "pago" },
  31: { buyer: "Jaqueline Ayla", status: "pago" },
  32: { buyer: "Dona Rosa", status: "pago" },
  37: { buyer: "Monique", status: "pago" },
  49: { buyer: "Dona Rosa", status: "pago" },
  57: { buyer: "Dona Rosa", status: "pago" },
  64: { buyer: "Dona Rosa", status: "pago" },
  70: { buyer: "Dona Rosa", status: "pago" },
  87: { buyer: "Allyson", status: "pago" },
  88: { buyer: "Dona Rosa", status: "pago" },
  100: { buyer: "Dona Rosa", status: "pago" },
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
