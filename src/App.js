import './App.css';
import CheckInCheckOutForm from './components/CheckInCheckOutForm/CheckInCheckOutForm';
import 'react-day-picker/dist/style.css';
import Events from './components/Events/Events';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  // integration of react hooks
  const [doRefetch, setDoRefetch] = useState(false);

  return (
    <main className="App">
      <CheckInCheckOutForm setDoRefetch={setDoRefetch} />
      <Events doRefetch={doRefetch} setDoRefetch={setDoRefetch} />
      <ToastContainer />
    </main>
  );
}

export default App;
