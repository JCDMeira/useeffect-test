import React, { useEffect, useState } from 'react';
import User from './Components/User';

function App() {
  const [count, setCount] = useState(0);
  const [userInfo, setUserinfo] = useState({
    name: 'Jean',
    lastName: 'Meira',
  });

  const incrementCount = () => setCount((currentNum) => currentNum + 1);

  // useEffect(() => {
  //   if (count !== 0) {
  //     console.log(
  //       'Por algum motivo qualquer o componente pai precisa de um controle de efeitos colaterais ',
  //     );
  //     console.log(count);

  //     setUserinfo({ ...userInfo });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    if (count !== 0) {
      console.log(
        'Por algum motivo qualquer o componente pai precisa de um controle de efeitos colaterais ',
      );
      console.log(count);

      setUserinfo({
        name: 'Jean',
        lastName: 'Meira',
      });
    }
  }, [count]);

  return (
    <div>
      <h1>Current count: {count}</h1>

      <button onClick={incrementCount}>Up count</button>

      <User userInfo={userInfo} />
    </div>
  );
}

export default App;
