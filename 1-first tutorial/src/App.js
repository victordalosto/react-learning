import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


function App() {

  const times = [
    { nome: "Programação", corPrimaria: "#57C278", corSecundaria: "#D9F7E9" },
    { nome: "Frontend",    corPrimaria: "#82CFFA", corSecundaria: "#E8F8FF" },
    { nome: "Backend",     corPrimaria: "#E06B69", corSecundaria: "#FDE7E8" },
  ];

  const [colaboradores, setColaboradores] = useState([]);


  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboratorCadastrado={colaborador => {
                    debugger
                    setColaboradores([...colaboradores, colaborador]);
                  }}
                  times={times.map(time => time.nome)}
      />
      {times.map(time =>
         <Time key={time.nome}
               nome={time.nome}
               corPrimaria={time.corPrimaria}
               corSecundaria={time.corSecundaria}
               colaboradores={colaboradores.filter(colaborador => colaborador.nivel === time.nome)}
      />)}
    </div>
  );
}

export default App;