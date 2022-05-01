import * as React from 'react';
import CollapsibleTable from './components/CollapsibleTable';
import Form from './components/Form';
import Header from './components/Header';
import axios from 'axios';
import Animations from './components/Animations';


function App() {
  const [user, setUser] = React.useState('');
  const [type, setType] = React.useState('todos');
  const [data, setData] = React.useState([]);
  const [activateError, setActivateError] = React.useState(false);
  const [activateAnimation, setActivateAnimation] = React.useState(false);
  const [activeTable, setActiveTable] = React.useState(false);

  const requestStudent = async () => {
    setActivateAnimation(true);
    const request = await axios
      .get(`https://aceleracaoapi.diegodemontier.repl.co/${user}`)
      .then((res) => res.data)
      .catch((err) => {
        setActivateAnimation(false);
        setActiveTable(false);
        return [];
      });
      if (request.length > 0) {
        const res = request.filter(element => element.exercicios.length > 0);
        if (res.length === 0) {
          setActiveTable(false);
          setActivateAnimation(false);
          setActivateError(true);
          return setData([])
        }
      }
      setActiveTable(true);
      setActivateAnimation(false);
      setActivateError(false);
      setData(request);
    };

  return (
    <div className="container">
      <Header
        activateError={activateError}
      />
      <Form
        setUser={setUser}
        setType={setType}
        type={type}
        requestStudent={requestStudent}
      />
      {activeTable && <CollapsibleTable data={data} type={type}/>}
      {activateAnimation && <Animations />}
    </div>
  );
}

export default App;
