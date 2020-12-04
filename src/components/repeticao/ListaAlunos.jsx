import React from 'react'
import alunos from '../../data/alunos'

const lis = alunos.map((aluno) => {
    return (
        <li key={aluno.id}>
            {aluno.id}) {aluno.nome} -> {aluno.nota}
        </li>
    )
})

const ListaAlunos = (props) => {
    return (
        <div>
            <ul style={{listStyle: "none"}}>{lis}</ul>
        </div>
    )
}

export default ListaAlunos
