'use client';

import { useDispatch, useSelector } from "react-redux";

import { MenuIcon } from "components/svgs";

import { ButtonGroup, Logo, MobileMenu, Search } from "./ui";
import { setHamburgerState } from "store";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const restrictedUrls = ['/login', '/register'];


const Header = () => {
  const dispatch = useDispatch();
  const pathname = usePathname()

  const restrict = useMemo(() => !restrictedUrls.includes(pathname) , [pathname])

  const { openMenu } = useSelector(state => state.common)

  const open = () => {
    dispatch(setHamburgerState(true))
  }
  return (
    <header className="bg-white  font-manrope sticky top-0 z-50">
      <nav
        className="sm:mx-auto relative flex max-w-fullScreen items-center justify-between py-3 md:px-8 px-3"
        aria-label="teqdimatlar"
      >
        <div className="flex justify-start gap-x-4 items-center">
          <div onClick={open} className="lg:hidden flex"><MenuIcon className='text-2xl' /></div>
          <Logo width={100} height={50} name="Logo" href="/" url='/icons/logo.svg' />
        </div>
        {restrict && <div className="w-full max-w-[180px] md:max-w-md lg:max-w-lg  relative items-center">
          <Search />
        </div>}
        <div className="hidden lg:flex items-center gap-x-2.5">
          <div className="flex gap-[1rem]">{<ButtonGroup />}</div>
        </div>
        {openMenu && <MobileMenu />}
      </nav>
    </header>
  );
}

export default Header;