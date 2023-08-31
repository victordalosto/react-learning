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
                {props.itens.map((item, idx) => <option key={idx}>{item}</option>)}
            </select>
        </div>
    );
}

export default ListaSuspensa;