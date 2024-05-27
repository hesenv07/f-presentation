'use client';

import { useScrollToTop } from "hooks";
import { Navbar } from "./ui";



 const Header=()=>{

    useScrollToTop()
    
    return(
        <header>
            <h1>Header</h1>
            <Navbar/>
        </header>
    )
}

 export default Header;