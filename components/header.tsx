"use client";

import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { Container } from "./container";
import { HamburgerIcon } from "./icons/hamburger";

import { Logo } from "./icons/logo";

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  
  
  //   Sa nu mai faca scroll pagina, cand meniul mobil este deschis aduce "class=overflow-hidden" pe "html"
  useEffect(()=>{
   const html =  document.querySelector('html');
   if(html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);


  //  Sa inchida meniul daca se face resize la port view, si elimina si "class=overflow-hidden" de pe "html" 
  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  //
  return (
    <header className=" fixed top-0 left-0 z-10  w-full   backdrop-blur-[12px] ">
      <Container className="flex h-navigation-height ">
         
          <Link className=" flex items-center text-md  " href="/">
            <Logo className="w-[1.9rem] h-[1.9rem] mr-3" />
            Linear
          </Link>
          <div
            className={classNames(
              "transition-[visibility] md:visible",
              hamburgerMenuIsOpen ? "visible " : "invisible  delay-500"
            )}
          >
            <nav
              className={classNames(
                "fixed top-navigation-height left-0  h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:overflow-hidden md:translate-x-0  md:opacity-100 md:transition-none  md:bg-transparent",

                hamburgerMenuIsOpen ? " opacity-100 translate-x-0" : " opacity-0 translate-x-[-100vw]"
              )}
            >
              <ul
                className={classNames(
                    "flex h-full flex-col md:flex-row md:items-center [&_li]:mx-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                    "ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:items-center [&_a]:font-semibold [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors",
                    hamburgerMenuIsOpen ? "[&_a]:translate-y-0":'[&_a]:translate-y-8'
                )}
              >
                <li>
                  <Link    onClick={() => setHamburgerMenuIsOpen(false)} href="#">Features</Link>
                </li>
                <li>
                  <Link  onClick={() => setHamburgerMenuIsOpen(false)}  href="#">Method</Link>
                </li>
                <li className=" md:hidden lg:block">
                  <Link  onClick={() => setHamburgerMenuIsOpen(false)}  href="#">Customers</Link>
                </li>
                <li className=" md:hidden lg:block">
                  <Link onClick={() => setHamburgerMenuIsOpen(false)}   href="#">Changelog</Link>
                </li>
                <li className=" md:hidden lg:block">
                  <Link  onClick={() => setHamburgerMenuIsOpen(false)}  href="#">Integrations</Link>
                </li>
                <li>
                  <Link  onClick={() => setHamburgerMenuIsOpen(false)}  href="#">Pricing</Link>
                </li>
                <li>
                  <Link  onClick={() => setHamburgerMenuIsOpen(false)}   href="#">Company</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="ml-auto flex h-full items-center">
            <Link
              className="mr-6 text-sm hover:text-grey transition-colors font-semibold whitespace-nowrap"
              href="#"
            >
              Log in
            </Link>
            <Button href="#" variant="primary">
              Sign up
            </Button>
          </div>
          <button
            className="ml-6 md:hidden"
            onClick={() => setHamburgerMenuIsOpen((open) => !open)}
          >
            <span className=" sr-only">Toogle menu</span>
            <HamburgerIcon />
          </button>
         
      </Container>
      <Container><div className="  border-b-[1.5px] border-transparent-white"></div></Container>
    </header>
  );
};
