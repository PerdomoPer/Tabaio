import './Main.css'
import imagem from ".././../assets/capagm.jpg"

function Main(){
    return(
        <div >
        <img className='main-foto' src={imagem} alt="" /> 
        <h1>Olá, Eu me chamo Gustavo Ferreira Perdomo</h1>
        <p>Eu sou aluno formado no curso tecnico em informatica pelo ifms campus navirai, fui medalhista na oliempiada brasileira de matematica, com experiencia em comercio de produtos escolares, brinquedos e moveis.</p>
        </div>
        
    )
}
export default Main
