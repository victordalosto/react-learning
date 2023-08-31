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
                    aoAlterar={v => setNome(v)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={v => setCargo(v)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da URL da imagem"
                    valor={imagem}
                    aoAlterar={v => setImagem(v)}
                />
                <ListaSuspensa
                    label="Nível"
                    itens={["Junior", "Pleno", "Senior"]}
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