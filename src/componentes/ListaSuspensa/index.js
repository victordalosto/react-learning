import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>
                {props.label}
            </label>
            <select
                required={props.obrigatorio}
                value={props.value}
                onChange={event => props.OnChange(event.target.value)}>
                <option value="" disabled>Selecione uma opção</option>
                {props.itens.map((item, idx) => <option key={idx}>{item}</option>)}
            </select>
        </div>
    );
}

export default ListaSuspensa;