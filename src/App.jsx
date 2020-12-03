import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#04 - Desafio Aleatório" color="#E94C6F">
                    <Aleatorio max={60} min={1} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#52D1DC">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Parâmetro" color="#F9C846">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro Silva"
                        nota={9.3}
                    />
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#73E2A7">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}

export default App
