import { useState, useEffect } from 'react';

import Navbar from './components/Navbar/index';
import Events from './components/Events';
import SignupForm from './components/SignupForm';

import './App.css';



function App() {

  const [searchTerm, setSearchTerm] = useState('');
  useEffect(()=>{
    console.log('use Efect')
  }, [searchTerm]);

  
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
