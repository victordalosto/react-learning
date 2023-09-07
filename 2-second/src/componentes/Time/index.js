import './time.css'
import hexToRgba from 'hex-to-rgba'
import Colaborador from '../Colaborador'

const Time = ({ time, colaboradores, aoDeletar, mudarCor, favoritarColaborador }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.4') }}>
            <input onChange={(event) => mudarCor(event.target.value, time.id)} value={time.cor} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador
                                key={indice}
                                colaborador={colaborador}
                                corDeFundo={time.cor}
                                aoDeletar={aoDeletar}
                                favoritarColaborador={favoritarColaborador}
                           />
                    })}
            </div>
        </section>
    )
}

export default Time