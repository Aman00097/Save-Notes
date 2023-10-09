import './App.css';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import Footer from './components/Footer';
import { createContext, useState } from 'react';

export const NoteContext = createContext();

const getNote = () => {
  if (localStorage.getItem('note')) {
    return JSON.parse(localStorage.getItem('note'));
  } else {
    return [];
  }
}

const App = () => {
  const [addNote, setAddNote] = useState(getNote());

  return (
    <NoteContext.Provider value={{ addNote, setAddNote }}>
      <main>
        <Header />
        <CreateNote />
        <div className='notes'>
          {
            addNote.map((ele) => <Note key={ele.id} note={ele} />)
          }
        </div>
        <Footer />
      </main>
    </NoteContext.Provider>
  );
}

export default App;
