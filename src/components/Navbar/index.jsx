import { useState } from "react";

const Navbar = ()=>{

    const [search, setSearch] = useState('');

    const handleInputChange = (e)=>{
        console.log(e.target.value);
        setSearch(e.target.value)
    }

    console.log(search)

    return(
        <div>
            <p>Mi boletará</p>
            <input placeholder="Busca tu evento favorito" 
            onChange={handleInputChange}
            value={search}
            />
        </div>
    );

};


export default Navbar;