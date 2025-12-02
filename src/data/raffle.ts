export interface RaffleNumber {
  number: number;
  sold: boolean;
  buyer?: string;
  status?: "Pago ✅" | "Pendente 🙏";
}

/**
 * Lista dos números vendidos e suas informações
 * – Você só edita aqui
 */
const soldNumbers: Record<
  number,
  { buyer: string; status: "Pago ✅" | "Pendente 🙏" }
> = {
  1: { buyer: "Monique", status: "Pendente 🙏" },
  3: { buyer: "Lenildo", status: "Pago ✅" },
  4: { buyer: "Bruno", status: "Pendente 🙏" },
  5: { buyer: "Carlos", status: "Pendente 🙏" },
  6: { buyer: "Andreza Filisolina", status: "Pago ✅" },
  7: { buyer: "Aline", status: "Pago ✅" },
  8: { buyer: "Almir Evangelista", status: "Pago ✅" },
  9: { buyer: "João Breno HRRBC", status: "Pago ✅" },
  10: { buyer: "Dona Rosa", status: "Pago ✅" },
  11: { buyer: "Luana Escola", status: "Pago ✅" },
  13: { buyer: "Crisly", status: "Pendente 🙏" },
  14: { buyer: "Marcos Leite", status: "Pago ✅" },
  16: { buyer: "Gessica", status: "Pago ✅" },
  17: { buyer: "Dona Rosa", status: "Pago ✅" },
  18: { buyer: "Walter Uchoa", status: "Pago ✅" },
  19: { buyer: "Lizzie", status: "Pago ✅" },
  20: { buyer: "Lizzie", status: "Pago ✅" },
  21: { buyer: "Aline", status: "Pago ✅" },
  22: { buyer: "Dona Rosa", status: "Pago ✅" },
  23: { buyer: "Paula", status: "Pago ✅" },
  24: { buyer: "Jaiany", status: "Pago ✅" },
  26: { buyer: "Vic", status: "Pago ✅" },
  27: { buyer: "Amanda Caroline", status: "Pago ✅" },
  28: { buyer: "Jaqueline Ayla", status: "Pago ✅" },
  29: { buyer: "Amanda Caroline", status: "Pago ✅" },
  31: { buyer: "Jaqueline Ayla", status: "Pago ✅" },
  32: { buyer: "Dona Rosa", status: "Pago ✅" },
  37: { buyer: "Monique", status: "Pendente 🙏" },
  48: { buyer: "Ana Carolina IF", status: "Pago ✅" },
  49: { buyer: "Dona Rosa", status: "Pago ✅" },
  50: { buyer: "Igor Rafael", status: "Pago ✅" },
  55: { buyer: "Lenildo", status: "Pago ✅" },
  56: { buyer: "Vitorinha", status: "Pago ✅"},
  57: { buyer: "Dona Rosa", status: "Pago ✅" },
  60: { buyer: "Andreza Filisolina", status: "Pago ✅" },
  64: { buyer: "Dona Rosa", status: "Pago ✅" },
  70: { buyer: "Dona Rosa", status: "Pago ✅" },
  85: { buyer: "Paula", status: "Pago ✅" },
  87: { buyer: "Allyson", status: "Pendente 🙏" },
  88: { buyer: "Dona Rosa", status: "Pago ✅" },
  99: { buyer: "Bruno Thomaz", status: "Pendente 🙏" },
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
