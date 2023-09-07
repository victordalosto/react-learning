import './lista-suspensa.css'

const ListaSuspensa = ({label, items,  valor, aoAlterado, obrigatorio = false}) => {
    return (<div className="lista-suspensa">
        <label>{label}</label>
        <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
            <option value="" disabled>Selecione uma opção</option>
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default ListaSuspensa