import { useState } from 'react';

import Navbar from './components/Navbar/index';
import Events from './components/Events';
import SignupForm from './components/SignupForm';

import './App.css';



function App() {

  const [searchTerm, setSearchTerm] = useState('');
  
  const handleNavbarSearch = (term)=>{
    setSearchTerm(term)

    console.log(term);

  }


  return (
    <>
      {/* <Navbar onSearch={handleNavbarSearch} />
      <Events searchValue={searchTerm}/> */}

      <SignupForm></SignupForm>
    </>
  )
}

export default App
