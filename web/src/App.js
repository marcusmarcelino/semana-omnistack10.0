import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm/index'
import DevItem from './components/DevItem/index';

function App() {
  const [devs, setDevs] = useState([]);
  

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data){
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map( dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

//Component:
/*Função que retorna algum conteudo html, um bloco
isolado de hmlt, css e Js, o qual não interfere no 
no restante da aplicação*/

//Propriedade
/*É quando eu utilizo atributos dentro do html, como título
informações que um componente pai passa passa para 
o componente filho
*/

//Estado:
/*Uma informação que o component vai manipular
informações mantidas pelo componente
*/