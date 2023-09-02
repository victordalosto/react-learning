import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [nivel, setNivel] = useState("");


    const aoEnviarFormulario = (event) => {
        event.preventDefault();
        props.aoColaboratorCadastrado({nome, cargo, imagem, nivel});
        setNome("");
        setCargo("");
        setImagem("");
        setNivel("");
        console.log("Formulario enviado: ", nome, cargo, imagem, nivel);
    }

    return (
        <section className = "formulario">
            <form onSubmit={aoEnviarFormulario}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterar={setNome}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={setCargo}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da URL da imagem"
                    valor={imagem}
                    aoAlterar={setImagem}
                />
                <ListaSuspensa
                    label="Nível"
                    itens={props.times}
                    obrigatorio={true}
                    value={nivel}
                    OnChange={v => setNivel(v)}
                />
                <Botao>
                    Criar botao
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;