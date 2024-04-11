import { useState, useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsData from "../../components/hooks/useEventsData";
// import SignupForm from './components/SignupForm';
import style from "./Home.module.css";

const Home = () => {
  const { events, page, isLoading, error, fetchEvents } = useEventsData();
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

  const handlePageClick = ({ selected }) => {
    console.log(selected);
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
  };

  const renderEvents = () => {
    if (isLoading) {
      return <div>Cargando resultados...</div>;
    }

    if (error) {
      return <div>Ha ocurrido un error</div>;
    }
    

    return (
      <div>
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
