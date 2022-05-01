import * as React from 'react';
import CollapsibleTable from './components/CollapsibleTable';
import Form from './components/Form';
import Header from './components/Header';
import axios from 'axios';


function App() {
  const [user, setUser] = React.useState([]);
  const [type, setType] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);


  React.useEffect(() => {
    const requestStudent = async () => {
      const request = await axios
        .get(`https://aceleracaoapi.diegodemontier.repl.co/${user}`)
        .then((res) => res.data)
        .catch((err) => {
          return [];
        });
        if (request.length > 0) {
          const res = request.filter(element => element.exercicios.length > 0);
          if (res.length === 0) {
            setOpen(true);
            return setData([])
          }
        }
        setOpen(false);
        setData(request);
      };
    requestStudent();
  }, [user]);

  return (
    <div className="container">
      <Header
        open={open}
      />
      <Form
        setUser={setUser}
        setType={setType}
      />
      <CollapsibleTable
        data={data}
        type={type}
      />
    </div>
  );
}

export default App;
