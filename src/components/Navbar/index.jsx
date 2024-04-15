import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";


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

    useImperativeHandle(ref, ()=>{
        return {
            search,
        }
    })

  

    return(
        <div ref={ref} style={{
            background: "#333",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5px 20px",
            color: "#fff",
            boxSizing: "border-box",
            gap: "15px",


        }} >
            <div style={{
                width: "max-content",
                fontSize: "1.2rem",
                textTransform: "uppercase",
                cursor: "pointer",
                fontWeight: "600"


            }}><p>Mi boletará</p></div>
                 <div className="perfil" style={{
                    background: "#444",
                    padding : "5px 15px",
                    flex: "1",
                    borderRadius: "8px"
                 }}>
                <Link to="/profile/my-info" style={{
                    marginLeft : "24px",
                    color: "#fff",
                    textDecoration : "none",

                }}>Mi perfil</Link>
            </div>

            <div style={{
                background: "#555",
                width: "250px",
                height: "40px",
                overflow: "hidden",
                borderRadius: "5px",
              

            }}>
            <input placeholder="Busca tu evento favorito"
            onChange={handleInputChange}
            value={search}
            onKeyDown={handleInputKeyDown}
            style={{
                width: "100%",
                height: "100%",
                background: "transparent",
               padding: "0 15px",
               outline: "none",
               border: "none",
          
               
            }}
            />
            </div>
       
        </div>
    );

});


export default Navbar;