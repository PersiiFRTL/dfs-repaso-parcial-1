import { useState } from 'react'
import './App.css'
import Controles from './components/Controles';
import Display from './components/Display';

function App() {
  const [unidad, setUnidad] = useState('Celsius');
  const [clima, setClima] = useState('Soleado')

  const cambiarUnidad = () => {
    setUnidad('Fahrenheit') 
    if(unidad === 'Fahrenheit'){
      setUnidad('Celsius')
    }
  }

  const cambiarClima = (estado) => {
    setClima(estado)
  }

  return (
    <div className="container">
      <h1>Estado del tiempo</h1>
      <Controles onCambiarUnidad={cambiarUnidad} onCambiarClima={cambiarClima} />
      <Display unidad={unidad} clima={clima} />
    </div>
  )
}

export default App
