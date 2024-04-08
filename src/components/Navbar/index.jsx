import { useState, useEffect } from "react";

const Navbar = ({onSearch})=>{
    const [search, setSearch] = useState('');

    useEffect(()=>{
        console.log('1010 effect')
    }, [onSearch, search])

    const handleInputChange = (e)=>{
    
        setSearch(e.target.value)
    }

    const handleInputKeyDown = (e)=>{
        if(e.key === "Enter"){

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