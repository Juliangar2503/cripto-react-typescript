import { z } from "zod";
import { currencySchema, CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema } from "../schemas/crypto-schema";

export type Currency = z.infer<typeof currencySchema>;

export type CryptoCurrenciesResponse = z.infer<typeof CryptoCurrencyResponseSchema>;

export type Pair = z.infer<typeof PairSchema>;

export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;