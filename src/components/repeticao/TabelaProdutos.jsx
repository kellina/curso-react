import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

const getLinhas = produtos.map((produto, i) => {
    return (
        <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
            <td> {produto.id} </td>
            <td> {produto.nome}</td>
            <td> R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
        </tr>
        
    )
})

const TabelaProdutos = (props) => {
    return (
        <table border='1' style={{ textAlign: "center" }}>
            <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Preço</th>
            </tr>
            {getLinhas}
        </table>
    )
}

export default TabelaProdutos