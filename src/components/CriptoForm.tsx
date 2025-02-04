import { ChangeEvent, FormEvent, useState } from "react"
import { currencies } from "../data/criptos"
import { useCryptoStore } from "../store"
import { Pair } from "../types"
import CryptoPriceDisplay from "./CryptoPriceDisplay"

export default function CriptoForm() {

    const cryptoCurrencies = useCryptoStore((state) => state.cryptocurrencies)
    const fetchData = useCryptoStore((state) => state.fetchData)

    const [pair, setPair] = useState<Pair>({ currency: '', criptoCurrency: '' })

    const [error, setError] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setPair({ ...pair, [name]: value })
    }

    

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(pair)
        if(!pair.currency || !pair.criptoCurrency){
            setError('Debe seleccionar una moneda y una criptomoneda')
            return
        }else{
            setError('')
            fetchData(pair)
        }
    }


    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='field'>
                <label htmlFor="currency">Moneda: </label>
                <select name="currency" id="currency" onChange={handleChange} value={pair.currency}>
                    <option value="">--- Seleccione ---</option>
                    {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))}
                </select>
            </div>
            <div className='field'>
                <label htmlFor="criptoCurrency">Criptomoneda: </label>
                <select name="criptoCurrency" id="criptoCurrency" onChange={handleChange} value={pair.criptoCurrency}>
                    <option value="">--- Seleccione ---</option>
                    {cryptoCurrencies.map((currency) => (
                        <option key={currency.CoinInfo.Name} value={currency.CoinInfo.Name}>{currency.CoinInfo.FullName}</option>
                    ))}
                </select>
            </div>
            {error && <p className="error">{error}</p>}
            <input type="submit" value="Cotizar"/>

            <div>
                <CryptoPriceDisplay />
                
            </div>
        </form>
    )
}
