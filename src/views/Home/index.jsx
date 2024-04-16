import { useState, useEffect, useRef, useCallback, useMemo, useReducer } from "react";
import ReactPaginate from "react-paginate";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsData from "../../components/hooks/useEventsData";
// import SignupForm from './components/SignupForm';
import useEventsResults from "../../state/events-results";
import style from "./Home.module.css";

const Home = () => {
  const {data, isLoading, error, fetchEvents} = useEventsResults();
  const events = useMemo(()=> data?._embedded?.events || [], [data?._embedded?.events]);
  const page = useMemo( ()=> data?.page || {}, [data?.page]);
  const [isToggle, setIsToggle] = useState(false);


  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();
  const fetchMyEventsRef = useRef()

  fetchMyEventsRef.current = fetchEvents;


  useEffect(() => {
    console.log("Hola soy el searchTerm");
  }, [searchTerm]);

  useEffect(() => {
    //fetchEvents();
    fetchMyEventsRef.current();
  }, []);

  const handleNavbarSearch = (term) => {
    console.log(containerRef.current);
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  };

  const handlePageClick = useCallback(({ selected }) => {
    console.log(searchTerm);
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
  }, [searchTerm, fetchEvents]);

  const renderEvents = () => {
    if (isLoading) {
      return <div>Cargando resultados...</div>;
    }

    if (error) {
      return <div>Ha ocurrido un error</div>;
    }
    

    return (
      <div>
        <button onClick={()=> setIsToggle(!isToggle)}>{isToggle ? 'ON':'OFF'}</button>
        <Events searchValue={searchTerm} events={events} />
        <ReactPaginate
          className={style.pagination}
          nextClassName={style.next}
          previousClassName={style.previous}
          pageClassName={style.page}
          activeClassName={style.activePage}
          disabledClassName={style.disablePage}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    );
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {renderEvents()}
    </>
  );
};

export default Home;
