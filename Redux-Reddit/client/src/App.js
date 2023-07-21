import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import EditPage from './components/Edit/EditPage';
import { useSelector } from 'react-redux';

function App() {

  const [isEidt, setIsEdit] = useState(false)
  const pending = useSelector((state) => state.user.pending)
  const error = useSelector((state) => state.user.error)
  return (
    <div className="App">
      {isEidt ? (<EditPage setIsEdit={setIsEdit}/>) : ( <Header setIsEdit={setIsEdit}/>)}
      {pending && <p className='loading'>Loading...</p>}
      {!isEidt && error && (
        <p className='error'>Error when fetching data form server</p>
      )}
    </div>
  );
}

export default App;
