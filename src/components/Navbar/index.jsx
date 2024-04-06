import { useState } from "react";

const Navbar = ({onSearch})=>{



    const [search, setSearch] = useState('');

    const handleInputChange = (e)=>{
        console.log(e.target.value);
        setSearch(e.target.value)
    }

    const handleInputKeyDown = (e)=>{
        if(e.key === "Enter"){
            console.log(e)
            onSearch(search);
        }
    }



    return(
        <div>
            <p>Mi boletará</p>
            <input placeholder="Busca tu evento favorito"
            onChange={handleInputChange}
            value={search}
            onKeyDown={handleInputKeyDown}
            />
        </div>
    );

};


export default Navbar;