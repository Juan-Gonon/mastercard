import { useState } from 'react';

import Navbar from './components/Navbar/index';
import Events from './components/Events';

import './App.css';



function App() {

  const [searchTerm, setSearchTerm] = useState('');
  
  const handleNavbarSearch = (term)=>{
    setSearchTerm(term)

    console.log(term);

  }


  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchValue={searchTerm}/>
    </>
  )
}

export default App
