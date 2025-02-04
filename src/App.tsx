import { useEffect } from "react"
import CriptoForm from "./components/CriptoForm"
import { useCryptoStore } from "./store"

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos) 

  useEffect(() => {
    fetchCryptos()
  }, [])
  
  return (
    <>
      <div className="container">
        <h1 className="app-title">Cotizador de
          <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoForm />
        </div>
      </div>
    </>
  )
}

export default App
