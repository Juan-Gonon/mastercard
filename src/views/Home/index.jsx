import { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Events from '../../components/Events'
// import SignupForm from './components/SignupForm';

const Home = ()=> {
    
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef();


    useEffect(()=>{
        console.log('Hola soy el searchTerm');
    }, [searchTerm]);

    
    const handleNavbarSearch = (term)=>{
        console.log(containerRef.current)
        setSearchTerm(term)

    }


    return (
        <>
        <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
        <Events searchValue={searchTerm}/>

        
        </>
    )
  
}


export default Home;