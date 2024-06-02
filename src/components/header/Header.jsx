'use client';

import { ButtonGroup, Logo } from "./ui";



 const Header=()=>{
    
    return (
        <header className="bg-white font-manrope sticky top-0 z-50">
          <nav
            className="sm:mx-auto relative flex max-w-fullScreen items-center justify-between py-3 md:px-8 px-3"
            aria-label="teqdimatlar"
          >
            <Logo width={150} height={50} name="Logo" href="/" url='/icons/logo.svg' />
            <div className="hidden lg:flex lg:gap-x-6 2xl:gap-x-15 items-center">
                {/* search section */}
            </div>
            <div className="flex items-center gap-x-2.5">
              <div className="flex gap-[1rem]">{<ButtonGroup />}</div>
              {/* <MobileMenu /> */}
            </div>
          </nav>
          {/* <Hamburger nameSite={nameSite} /> */}
        </header>
      );
}

 export default Header;