import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'


const App = () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#08 - Renderização Condicional" color="#C6F91F">
                    <ParOuImpar numero={21} />
                    <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
                </Card>

                <Card titulo="#07 - Repetição - Tabela" color="#FF90B3">
                    <TabelaProdutos />
                </Card>

                <Card titulo="#06 - Repetição - Lista" color="#6E44FF">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com Filhos" color="#85B79D">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro"></FamiliaMembro>
                        <FamiliaMembro nome="Ana"></FamiliaMembro>
                        <FamiliaMembro nome="Gustavo"></FamiliaMembro>
                    </Familia>
                </Card>

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
