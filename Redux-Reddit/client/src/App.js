import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import EditPage from './components/Edit/EditPage';
import { useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';
import MakePost from './components/Posts/MakePost';
import Post from './components/Posts/Post';

function App() {

  const [isEidt, setIsEdit] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pending = useSelector((state) => state.user.pending)
  const error = useSelector((state) => state.user.error)
  
  return (
    <div className="App">
      {isEidt ? (<EditPage setIsEdit={setIsEdit}/>) : !isEidt && !isOpen ? ( 
        <>
          <Header setIsEdit={setIsEdit}/>
          <div className='posts-container'>
            <Post/>
          </div>
          <Footer isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
      ): (
        <>
          <Header setIsEdit={setIsEdit}/>
          <MakePost setIsOpen={setIsOpen}/>
        </>
      )}

      {pending && <p className='loading'>Loading...</p>}
      {!isEidt && error && (
        <p className='error'>Error when fetching data form server</p>
      )}
    </div>
  );
}

export default App;
