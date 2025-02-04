import { useMemo } from "react"
import { useCryptoStore } from "../store"


export default function CryptoPriceDisplay() {


    const result = useCryptoStore((state) => state.result)
    const hasResult = useMemo(() => Object.keys(result).length > 0, [result])

    return (
        <div className="result-wrapper">
            {hasResult && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img src={`https://www.cryptocompare.com${result.IMAGEURL}`} alt="logo" />
                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>El cambio en 24h es de: <span>{result.CHANGE24HOUR}</span></p>
                            <p>El precio máximo es de: <span>{result.HIGHDAY}</span></p>    
                            <p>El precio mínimo es de: <span>{result.LOWDAY}</span></p>
                            <p>La última actualización es de: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}
