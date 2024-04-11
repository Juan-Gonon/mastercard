import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsData from "../../components/hooks/useEventsData";
// import SignupForm from './components/SignupForm';

const Home = () => {
  const { events, isLoading, error, fetchEvents } = useEventsData();
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  useEffect(() => {
    console.log("Hola soy el searchTerm");
  }, [searchTerm]);

  useEffect(() => {
    fetchEvents();
  }, []);

 


  const handleNavbarSearch = (term) => {
    console.log(containerRef.current);
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {isLoading ? <div>Cargando resultados...</div> : <Events searchValue={searchTerm} events={events} />}
      {!!error && <div>Ha ocurrido un error</div>}
    </>
  );
};

export default Home;
