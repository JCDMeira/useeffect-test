import React, { useState } from 'react';
import User from './Components/User';

function App() {
  const [count, setCount] = useState(0);
  const [userInfo, _] = useState({
    name: 'Jean',
    lastName: 'Meira',
  });

  const incrementCount = () => setCount((currentNum) => currentNum + 1);

  return (
    <div>
      <h1>Current count: {count}</h1>

      <button onClick={incrementCount}>Up count</button>

      <User userInfo={userInfo} />
    </div>
  );
}

export default App;
