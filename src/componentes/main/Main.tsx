import { useState } from 'react'
import Projetos from './../projetos/Projetos'
import './Main.css'
type ProjetosType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main() {

    const [texto,setTexto]=useState("")

    const projeto:ProjetosType[] = [
        {
            id:1,
            titulo:'Gustavo Ferreira Perdomo',
            sinopse:"Eu sou aluno formado no curso tecnico em informatica pelo ifms campus navirai, fui medalhista na olimpiada brasileira de matematica, com experiencia em comercio de produtos escolares, brinquedos e moveis.",
            imagem:'/eu.jpg'
        },
        {
            id:2,
            titulo:'Barbie Aventura de Cavalos',
            sinopse:'Barbie treina um cavalo selvagem com suas irmãs durante suas férias nos Alpes.',
            imagem:'/pp.png'
        },
    ]
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)
    }
    return(
        <>
        <div>
            <input className='pesquisa' 
            type="text" 
            placeholder='O que você está procurando?'
            onChange={TrataTexto} />
            {texto && <p className='pesquisa1'>Resultados Para: {texto} </p>}
                
        </div>
        <main className="content-main">
        {
                    projeto.filter((projetos)=>projetos.titulo.toLowerCase().includes(texto)).map(
                        (projetos)=>
                            <Projetos
                                key={projetos.id}
                                sinopse={projetos.sinopse}
                                titulo={projetos.titulo}
                                imagem={projetos.imagem}
                            />
                    )
                }
        </main>
        </>
    )
}