import './Colaborador.css'


const Colaborador = ({nome, imagem, cargo, corFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h3>{nome}</h3>
                <p>{cargo}</p>
            </div>
        </div>
    )
}

export default Colaborador;