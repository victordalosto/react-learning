import './CampoTexto.css';

const CampoTexto = (props) => {
    const texto = `${props.placeholder}...`;

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input
                value={props.valor}
                onChange={(event) => props.aoAlterar(event.target.value)}
                required={props.obrigatorio}
                placeholder={texto}/>
        </div>
    );
}



export default CampoTexto;