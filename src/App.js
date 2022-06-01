import './App.css';
import CheckInCheckOutForm from './components/CheckInCheckOutForm/CheckInCheckOutForm';
import 'react-day-picker/dist/style.css';
import Events from './components/Events/Events';
import { useState } from 'react';

function App() {
  // integration of react hooks
  const [doRefetch, setDoRefetch] = useState(false);

  return (
    <main className="App">
      <CheckInCheckOutForm setDoRefetch={setDoRefetch} />
      <Events doRefetch={doRefetch} setDoRefetch={setDoRefetch} />
    </main>
  );
}

export default App;
