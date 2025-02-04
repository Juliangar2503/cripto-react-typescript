
import axios from "axios"
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schemas/crypto-schema"
import { Pair } from "../types"

export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios.get(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    console.log(result)
    if (result.success) {
        return result.data
    }
}

export async function fetchCurrentCurrentCryptoPrice(pair: Pair) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptoCurrency}&tsyms=${pair.currency}`
    const { data: { DISPLAY} } = await axios.get(url)
    const retult = CryptoPriceSchema.safeParse(DISPLAY[pair.criptoCurrency][pair.currency])
    if(retult.success){
        return retult.data
    }

}