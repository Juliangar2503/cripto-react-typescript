import { create } from "zustand"
import { CryptoCurrenciesResponse, CryptoPrice, Pair } from "./types"
import { devtools } from "zustand/middleware"
import { fetchCurrentCurrentCryptoPrice, getCryptos } from "./services/CryptoService"

type CryptoStore = {
    cryptocurrencies: CryptoCurrenciesResponse[]
    result: CryptoPrice
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    
    cryptocurrencies: [],

    result: {} as CryptoPrice,

    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set({ cryptocurrencies })
    },

    fetchData: async (pair) => {
        const result = await fetchCurrentCurrentCryptoPrice(pair)
        set({ result })
    }
})))