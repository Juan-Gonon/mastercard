import { useState, useEffect, forwardRef } from "react";

const Navbar = forwardRef(({onSearch}, ref)=>{
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
        <div ref={ref} >
            <p>Mi boletará</p>
            <input placeholder="Busca tu evento favorito"
            onChange={handleInputChange}
            value={search}
            onKeyDown={handleInputKeyDown}
            />
        </div>
    );

});


export default Navbar;