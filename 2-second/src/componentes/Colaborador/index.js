import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, favoritarColaborador }) => {

    const propsFavorito = {
        size:25,
        onClick: () => favoritarColaborador(colaborador)
    }

    return (<div className="colaborador">
        <AiFillCloseCircle size={30} className="deletar" onClick={() => aoDeletar(colaborador)} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito
                    ? <AiFillHeart {...propsFavorito} value="#ff0000" />
                    : <AiOutlineHeart {...propsFavorito} />
                }
            </div>
        </div>
    </div>)
}

export default Colaborador